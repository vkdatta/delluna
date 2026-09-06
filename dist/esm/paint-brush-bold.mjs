export const name="paint-brush-bold";
export const id="dl_90aa01635e374781bc29";
export const url=new URL("../icons/paint-brush-bold.svg?v=49acd5a889f61caf0405e04a0e01947654fa8f8ea2f14112b7215e31e487c37c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
