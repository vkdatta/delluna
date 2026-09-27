export const name="language_chinese_wubi-fill";
export const id="dl_9c9b11caeb623b187b0b";
export const url=new URL("../icons/language_chinese_wubi-fill.svg?v=00787e274ae059271ae2e7094872f80ee8dde70e247051d99fb34653013ff931",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
