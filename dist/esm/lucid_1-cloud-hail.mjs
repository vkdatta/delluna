export const name="lucid_1-cloud-hail";
export const id="dl_6851e679f0804bccb1bd";
export const url=new URL("../icons/lucid_1-cloud-hail.svg?v=4e6debde63cb33326713e651a4634d2b936979fc77657fc26e78f91c7acc3b18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
