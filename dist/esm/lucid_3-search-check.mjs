export const name="lucid_3-search-check";
export const id="dl_9c821b2da72d40a4b00f";
export const url=new URL("../icons/lucid_3-search-check.svg?v=32db996ffe3c400b713cae70767488a65004e1b536a199ce1ce2d6c2ca3ea32c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
