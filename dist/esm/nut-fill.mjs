export const name="nut-fill";
export const id="dl_f609ac6e9b594f7b8af0";
export const url=new URL("../icons/nut-fill.svg?v=5ce45c1085a84c82d23c3689d2407d09f338b63045cb2ac5648fc3ed5767c27c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
