export const name="lucid_1-cloud-hail";
export const id="dl_6851e679f0804bccb1bd";
export const url=new URL("../icons/lucid_1-cloud-hail.svg?v=2e3a999ae4c1cd7322fdf072b09d7053f4a48a451fd55514f2f3eab6692f45de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
