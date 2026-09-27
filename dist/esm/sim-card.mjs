export const name="sim-card";
export const id="dl_4a7c1fd90cf7338f9692";
export const url=new URL("../icons/sim-card.svg?v=0e868f0aa25c59460ce827811f69581a37edd60794876b6eef5f32148d6fd2b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
