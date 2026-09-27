export const name="tag-chevron-fill";
export const id="dl_67dd0a181939041ac9ec";
export const url=new URL("../icons/tag-chevron-fill.svg?v=20a0a1d8cec85a318ed3f7b6d337a54a3e46849eb2d715f5609ba3bbe6a49a55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
