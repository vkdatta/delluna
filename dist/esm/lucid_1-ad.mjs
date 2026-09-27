export const name="lucid_1-ad";
export const id="dl_5e99f4d039b64157825c";
export const url=new URL("../icons/lucid_1-ad.svg?v=92b2a3319af41096f47e20c7b73608b284684529a7049e4a43e5d4bf733c30f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
