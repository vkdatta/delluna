export const name="assistant_on_hub";
export const id="dl_5d3399c17c5641b6af99";
export const url=new URL("../icons/assistant_on_hub.svg?v=fb8f4ca6daf5b53f01096d15e9b24bbed5e4e6a3683189571ccfa4f2a747db03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
