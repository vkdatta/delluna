export const name="lyrics";
export const id="dl_5d3334d26da142ecb008";
export const url=new URL("../icons/lyrics.svg?v=32563b778a22b265df3d0be4015350acb4d2465693ea80200b24a545ba12100c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
