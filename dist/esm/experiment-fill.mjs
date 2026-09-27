export const name="experiment-fill";
export const id="dl_2589b69bfb94a80b5e96";
export const url=new URL("../icons/experiment-fill.svg?v=57d1832682c3c71250d808b6ddfc21e0ab7864467315ed560ae31b1c46460070",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
