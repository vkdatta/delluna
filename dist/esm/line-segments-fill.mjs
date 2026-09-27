export const name="line-segments-fill";
export const id="dl_9153fddabdc6421ab1f6";
export const url=new URL("../icons/line-segments-fill.svg?v=61d286abc2d1fa781ef0c9e68eb4cbb62663320c61019fc56ebec89c53e416b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
