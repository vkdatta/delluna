export const name="lamp";
export const id="dl_c24efe15b70f43d5835e";
export const url=new URL("../icons/lamp.svg?v=050404f69c3c817fe70c345421d8e833f0a40c248ef33a64399b577d294a6eb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
