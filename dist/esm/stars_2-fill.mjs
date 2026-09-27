export const name="stars_2-fill";
export const id="dl_8f1b4e9e7861d21ffb1f";
export const url=new URL("../icons/stars_2-fill.svg?v=4df46992ab6c3a145ae3f083b8141299da853d1a629716ae09216ade9c12307c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
