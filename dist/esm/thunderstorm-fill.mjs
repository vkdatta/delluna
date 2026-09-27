export const name="thunderstorm-fill";
export const id="dl_baf8a4146780387f91c4";
export const url=new URL("../icons/thunderstorm-fill.svg?v=6bec098745362acb022b32c5ac381e319ad5243f752aaca05d63c3c970617f0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
