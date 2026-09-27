export const name="ungroup-fill";
export const id="dl_b46c6cd9fb961c61c857";
export const url=new URL("../icons/ungroup-fill.svg?v=164b00cebea3686d84d31580df716d94e0de8c392c58b96cba20fb020cbc3657",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
