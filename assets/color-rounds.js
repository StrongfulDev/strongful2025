function color_hex(html) {
  for (
    let i = 0;
    i < html.querySelectorAll(".color-swatch__item").length;
    i++
  ) {
    let colorLabel = html.querySelectorAll(".color-swatch__item")[i];
    if (colorLabel.innerHTML.includes("שחור")) {
      colorLabel.style.backgroundColor = "#000000";
    } else if (colorLabel.innerHTML.includes("לבן")) {
      colorLabel.style.backgroundColor = "#ffffff";
      colorLabel.style.border = "1px solid #000000";
    } else if (colorLabel.innerHTML.includes("אדום")) {
      colorLabel.style.backgroundColor = "#d81e06";
    } else if (colorLabel.innerHTML.includes("כחול")) {
      if (colorLabel.innerHTML.includes("בהיר")) {
        colorLabel.style.backgroundColor = "#add8e6"; // Light Blue
      } else if (colorLabel.innerHTML.includes("כהה")) {
        colorLabel.style.backgroundColor = "#00008b"; // Dark Blue
      } else {
        colorLabel.style.backgroundColor = "#0084c9"; // Default Blue
      }
    } else if (colorLabel.innerHTML.includes("ירוק")) {
      colorLabel.style.backgroundColor = "#016847";
    } else if (colorLabel.innerHTML.includes("טורקיז")) {
      colorLabel.style.backgroundColor = "#00b2a9";
    } else if (colorLabel.innerHTML.includes("ניוד")) {
      colorLabel.style.backgroundColor = "#d8bfaa";
    } else if (colorLabel.innerHTML.includes("צהוב")) {
      colorLabel.style.backgroundColor = "#f4e287";
    } else if (colorLabel.innerHTML.includes("כתום")) {
      colorLabel.style.backgroundColor = "#fda310";
    } else if (colorLabel.innerHTML.includes("סגול")) {
      colorLabel.style.backgroundColor = "#664975";
    } else if (colorLabel.innerHTML.includes("ורוד")) {
      colorLabel.style.backgroundColor = "#ff77a8";
    } else if (
      colorLabel.innerHTML.includes("חום") ||
      colorLabel.innerHTML.includes("מוקה")
    ) {
      colorLabel.style.backgroundColor = "#472311";
    } else if (colorLabel.innerHTML.includes("אפור")) {
      colorLabel.style.backgroundColor = "#a3a8a3";
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  color_hex(document);

  // Re-apply color_hex when the filter form is updated
  const filterForm = document.getElementById("facet-filters-form");
  if (filterForm) {
    filterForm.addEventListener("change", function () {
      setTimeout(() => color_hex(document), 500); // Delay to ensure DOM updates
    });
  }

  // Listen for AJAX updates if applicable
  document.addEventListener("shopify:section:load", function () {
    color_hex(document);
  });
  document.addEventListener("shopify:section:unload", function () {
    color_hex(document);
  });
  document.addEventListener("shopify:section:select", function () {
    color_hex(document);
  });
  document.addEventListener("shopify:section:deselect", function () {
    color_hex(document);
  });
  document.addEventListener("shopify:section:reorder", function () {
    color_hex(document);
  });
  document.addEventListener("shopify:block:select", function () {
    color_hex(document);
  });
  document.addEventListener("shopify:block:deselect", function () {
    color_hex(document);
  });
});
