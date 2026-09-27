export const name="butterfly";
export const id="dl_a3224e73f0474227b63e";
export const url=new URL("../icons/butterfly.svg?v=c98d98e29521fcf2de9f3d25d092ff819a6d250b8ad6158121ae777aa43d88f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
