export const name="lucid_1-battery";
export const id="dl_5c646780540a401e854b";
export const url=new URL("../icons/lucid_1-battery.svg?v=19c0cbdc09f51c84fc706581afd7be1ece25a9d3531008bb9c6dde30567b7a7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
