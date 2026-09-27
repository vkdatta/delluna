export const name="lucid_1-clock-8";
export const id="dl_824c5146837c4a228c9c";
export const url=new URL("../icons/lucid_1-clock-8.svg?v=2bb24cce2327fec7cb789217eb6b3083152dca8faf72f29ffd333c76a51ecc14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
