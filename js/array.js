var data = [
    {title : "Cotton", category: "Shirt service", price:"$45"},
    {title : "Brand", category: "Shirt service", price:"$45"},
    {title : "Lillen", category: "Shirt service", price:"$45"},
    {title : "Dgorn", category: "Shirt service", price:"$45"}

    
  ];
  function getData(item) {
    var title = [item.title].join(" ");
    var category = [item.category].join(" ");
    var price= [item.price].join(" ");
    return title,category,price;
  }
  