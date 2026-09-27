export const name="hide_source";
export const id="dl_993e1a484849415fdc50";
export const url=new URL("../icons/hide_source.svg?v=d2bdb5c698430f3a93a3b3233bb5cdbb7dab9e5a60adb7b7d681fb07f39b8b9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
