export const name="steps-fill";
export const id="dl_29b80c63e11846698761";
export const url=new URL("../icons/S/steps-fill.svg?v=520c21903d51cee34ca9aebcfa034c9a5eb4e91290c148e921f6f19fec05b799",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
