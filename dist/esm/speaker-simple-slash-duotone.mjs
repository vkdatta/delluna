export const name="speaker-simple-slash-duotone";
export const id="dl_eeda1f20011e7f921064";
export const url=new URL("../icons/speaker-simple-slash-duotone.svg?v=9e1e4b42d099c9b936a20346de9c1557dc087ea46c9f3d02428b78b07fb721d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
