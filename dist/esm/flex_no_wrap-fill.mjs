export const name="flex_no_wrap-fill";
export const id="dl_a7aef1c521d63f2ec1d3";
export const url=new URL("../icons/flex_no_wrap-fill.svg?v=1c097d3df9b82bd1df1dbdfdf2b7b9ddf65b45d96c972083d06a28637a36b105",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
