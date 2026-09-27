export const name="sports_golf-fill";
export const id="dl_f0b82a3e147b3905ff11";
export const url=new URL("../icons/sports_golf-fill.svg?v=85d15aa6894b98076158c6b9fefd3d7dab719bfaf81b23e8a21f310fcf688236",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
