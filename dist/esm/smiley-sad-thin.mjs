export const name="smiley-sad-thin";
export const id="dl_73139808d48a4e3ba7f2";
export const url=new URL("../icons/S/smiley-sad-thin.svg?v=444296e49637a32dbfc97fefd7266e9f926b4a8778f2619f5b58ab05c6a93fa8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
