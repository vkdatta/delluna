export const name="lucid_2-fold-horizontal";
export const id="dl_3958c29e3abb46c28a06";
export const url=new URL("../icons/lucid_2-fold-horizontal.svg?v=ae23788de97c151c3de56901e6fe97a5f0be5d18b5c5575f2f0b1deaee76b496",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
