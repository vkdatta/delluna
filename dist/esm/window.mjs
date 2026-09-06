export const name="window";
export const id="dl_1dc78726f43e41e592d5";
export const url=new URL("../icons/window.svg?v=3bb0152366c10c8b530b7c2f2f2aa72d4c8bbe4dd9fb88162055811415403e60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
