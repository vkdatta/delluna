export const name="lucid_1-can";
export const id="dl_58a6a3e6f44b4c75b9eb";
export const url=new URL("../icons/lucid_1-can.svg?v=065961db8c58bd093ea367e836a45ea1a444b250b0579924a87a76650ef31312",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
