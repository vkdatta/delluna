export const name="lucid_1-arrow-down-wide-narrow";
export const id="dl_e085e3f8c5dc4b08a690";
export const url=new URL("../icons/lucid_1-arrow-down-wide-narrow.svg?v=15b523f07b59f6bd67487bdb50f21c0fcd1c66f537e236b3f6f5eed3f344fd65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
