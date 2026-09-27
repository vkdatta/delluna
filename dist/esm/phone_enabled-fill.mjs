export const name="phone_enabled-fill";
export const id="dl_e032dc84c2b925fa3d0e";
export const url=new URL("../icons/phone_enabled-fill.svg?v=b38a94d017b473037ab4736dcd74fa96e305c3e7dce9527c8d5ea2c0067322ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
