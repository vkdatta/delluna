export const name="blinds_2-fill";
export const id="dl_a1c7c57acc85ca78dc31";
export const url=new URL("../icons/blinds_2-fill.svg?v=8640cf3078c9f54b7fccbd9235c4a6da4458ad8f39823e6b1a6297f30b963be8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
