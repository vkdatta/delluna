export const name="nephrology";
export const id="dl_ad6f558764b1b40e34ab";
export const url=new URL("../icons/nephrology.svg?v=64bd51fd06e361faf614109ecd9670c128cf63322090bba770d9eda6d59ec7b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
