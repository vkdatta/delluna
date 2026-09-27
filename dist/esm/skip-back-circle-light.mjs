export const name="skip-back-circle-light";
export const id="dl_4c65121e035bcd167638";
export const url=new URL("../icons/skip-back-circle-light.svg?v=e7a7de9b70344c4c2003ba2ff414fdfc858f16b6762b9a03ceea0d03c90dddfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
