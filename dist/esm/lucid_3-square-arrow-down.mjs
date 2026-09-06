export const name="lucid_3-square-arrow-down";
export const id="dl_62d1fcacb07745908f71";
export const url=new URL("../icons/lucid_3-square-arrow-down.svg?v=7d8b0dd4c056094e8d6425a4c9054637ee9f1dc6f31edc3d2ed0d7c13f08cde2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
