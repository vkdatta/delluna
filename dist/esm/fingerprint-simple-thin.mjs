export const name="fingerprint-simple-thin";
export const id="dl_29fbb7ebc29d4e0f88f5";
export const url=new URL("../icons/fingerprint-simple-thin.svg?v=3fe207b60777fa576151f28c3ec0ace8b30d8a97bead347b45891a3ca1fa4f3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
