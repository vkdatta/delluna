export const name="desk";
export const id="dl_6c7bc253188d4c92b33d";
export const url=new URL("../icons/desk.svg?v=f136e0bda124045f09487f1c1ada36342edfc6405ebd519b102d806716f6d1d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
