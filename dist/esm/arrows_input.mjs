export const name="arrows_input";
export const id="dl_01445ab5bc79d0db5652";
export const url=new URL("../icons/arrows_input.svg?v=6b2100223be25bdd07b5999245653142557e3d96f45710136dbb7939ce2dcb6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
