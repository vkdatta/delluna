export const name="split-vertical-light";
export const id="dl_f4d7c6dbabd712ddc494";
export const url=new URL("../icons/split-vertical-light.svg?v=75a681677ee9ed953a73de44cd3a22ffea3cf1f2316ea420e85de9b242b3e215",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
