export const name="arrow-line-down-duotone";
export const id="dl_9e363e3742924de680a2";
export const url=new URL("../icons/arrow-line-down-duotone.svg?v=6b88949980fb327e4a14b490675e45ca9b40634b45efd53242c384f2c9a9f1ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
