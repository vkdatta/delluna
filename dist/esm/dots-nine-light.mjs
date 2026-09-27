export const name="dots-nine-light";
export const id="dl_d450e0ca1d664706b9e0";
export const url=new URL("../icons/dots-nine-light.svg?v=a865f314acc6695ec6b44e07fd4f4e4fb0a7dd39078a3c037cbeff82e7a57e9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
