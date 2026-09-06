export const name="google-cardboard-logo-bold";
export const id="dl_2d8675bdb0bc45a284f8";
export const url=new URL("../icons/google-cardboard-logo-bold.svg?v=624685b6fcd458af670e5ef41bca18edc3cfc31c85d651947dfef10504a47655",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
