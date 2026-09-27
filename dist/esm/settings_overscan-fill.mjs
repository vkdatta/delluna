export const name="settings_overscan-fill";
export const id="dl_4e738ac8e9d60cfa5b75";
export const url=new URL("../icons/settings_overscan-fill.svg?v=f534d8f003eab4713d368704c99d024b9cb1bc37818816f74bfe59ac233c5a65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
