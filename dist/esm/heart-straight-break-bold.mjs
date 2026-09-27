export const name="heart-straight-break-bold";
export const id="dl_e062ddaf380341d6aa8d";
export const url=new URL("../icons/heart-straight-break-bold.svg?v=33178d2bf4321f8aeb1bd3ba4bac923404168543cf8530c3170a75d279e7be0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
