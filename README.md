# Plotly-Challenge

In this challenge I am building an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels. The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

I achieved this by using Plotly to create visualizations such as a bar chart, a bubble chart, and demographic info section that displays an individual’s demographic information. Each chart works directly with demographic information section and dropdown that will let someone choose an induvial person’s ID.

The horizontal bar chart displays the top 10 OTU’s found per person. I used the sample_values as the values for the chart and the OTU_ids as the labels.

The bubble chart displays each sample using OTU_ids as the x-values and the sample_values as the y-values. I then used the OTU_ids for the colors and the sample_values for the marker size. 
