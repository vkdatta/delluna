export const name="tamper_detection_off-fill";
export const id="dl_2d6ff7c0046b6197df2f";
export const url=new URL("../icons/tamper_detection_off-fill.svg?v=5aeb4f012150f9e60b21bb14ed7b097fd3a5755e335315fa52acac69e9916763",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
