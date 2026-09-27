export const name="lucid_3-square-asterisk";
export const id="dl_8a9b3816483c4ae2985b";
export const url=new URL("../icons/lucid_3-square-asterisk.svg?v=cd68bef377f76c673af54df1c78db6ed9edc4ea5cc603165fb74236988369a08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
