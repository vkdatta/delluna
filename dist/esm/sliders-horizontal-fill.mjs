export const name="sliders-horizontal-fill";
export const id="dl_121bd1eb956f933466f4";
export const url=new URL("../icons/sliders-horizontal-fill.svg?v=b9de21dca9bb9e49a4978b122c983fbc3d3a1e8f3f7e4e79780226c8a8706862",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
