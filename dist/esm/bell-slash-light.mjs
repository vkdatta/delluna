export const name="bell-slash-light";
export const id="dl_f459f9b5551049e19bc5";
export const url=new URL("../icons/bell-slash-light.svg?v=a3572f9622648a7fd1a57a2cef99beab2387e11f420215853ce3156b52349d1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
