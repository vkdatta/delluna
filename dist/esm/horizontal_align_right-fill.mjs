export const name="horizontal_align_right-fill";
export const id="dl_41cb855bb86847a3bbf4";
export const url=new URL("../icons/horizontal_align_right-fill.svg?v=d6a4e05909b0df95e317d320384d203a6f49ea2f47851a3bff4ca1275af0c321",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
