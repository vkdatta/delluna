export const name="open_with-fill";
export const id="dl_9af06d3ed06479c4b66c";
export const url=new URL("../icons/open_with-fill.svg?v=12ea97ab83569ef74885fe4798a657654dc996c5e1a7397d05851f479235ee41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
