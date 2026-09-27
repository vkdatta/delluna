export const name="unlicense-fill";
export const id="dl_7d8b5741a55e5d8fde97";
export const url=new URL("../icons/unlicense-fill.svg?v=d01cfbf4d9a41cba9f101c4c3a11e65accda0cbe132ae20381bbf72168e7e764",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
