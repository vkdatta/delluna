export const name="inventory-fill";
export const id="dl_39695c31c71d5ed3e458";
export const url=new URL("../icons/inventory-fill.svg?v=14a453d58ca4a135fee2d3bd9d46efbb855bcce4a3309dd781621efc81fdd764",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
