export const name="allergy-fill";
export const id="dl_5d69d1e0923e5c5a7c8e";
export const url=new URL("../icons/allergy-fill.svg?v=0bf77e237ae2eb0bebdd07079a9e360a7fcb5597cfce69a09f0d60fd3bea14a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
