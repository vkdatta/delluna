export const name="lucid_2-gallery-vertical-end";
export const id="dl_f5c16e9647e04d8f855d";
export const url=new URL("../icons/lucid_2-gallery-vertical-end.svg?v=5225b7a1ac9341dcbdd802f140724482493752ea2a46cf77f0aece02a2155ca6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
