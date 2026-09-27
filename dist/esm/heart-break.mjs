export const name="heart-break";
export const id="dl_8c1a34f102634712873e";
export const url=new URL("../icons/heart-break.svg?v=be180469b65cab653b6da074c27a8eb145d0bf063af22f564137c2fb439f6075",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
