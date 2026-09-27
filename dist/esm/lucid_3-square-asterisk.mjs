export const name="lucid_3-square-asterisk";
export const id="dl_8a9b3816483c4ae2985b";
export const url=new URL("../icons/lucid_3-square-asterisk.svg?v=68792fa85dcb5150e1cfcd93bbd4339be97cb4a99649b87961b4d33d8ba48f70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
