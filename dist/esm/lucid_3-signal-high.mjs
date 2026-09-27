export const name="lucid_3-signal-high";
export const id="dl_b2777495b17246cb8e59";
export const url=new URL("../icons/lucid_3-signal-high.svg?v=f418415f88835411a02268a303383dede06448b91eb23f5056a45ead68865538",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
