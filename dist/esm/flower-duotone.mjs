export const name="flower-duotone";
export const id="dl_43079dfa63e34195bb38";
export const url=new URL("../icons/flower-duotone.svg?v=35b4007c31242dfd275a7eaca1ed368c8060cadaf55e5c35a7a12b44c655a40e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
