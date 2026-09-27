export const name="lucid_2-italic";
export const id="dl_566c884ca6534c8183c5";
export const url=new URL("../icons/lucid_2-italic.svg?v=d8b11722527a426036addf38e4ec9ae2276311a35bce5b7e1a74480f8b62574f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
