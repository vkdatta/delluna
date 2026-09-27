export const name="toys_fan-fill";
export const id="dl_9c92b95a11c5e333520c";
export const url=new URL("../icons/toys_fan-fill.svg?v=a6450859be631b766b7aa252fa84102b1b8986e66773db1c8d6a359afa76a1ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
