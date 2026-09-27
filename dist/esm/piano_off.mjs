export const name="piano_off";
export const id="dl_fe2f18391a445c319b9d";
export const url=new URL("../icons/piano_off.svg?v=6667050e4f60d09636a836171e00d6d43653ce7cf5d9a08fdd642abebbe5a596",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
