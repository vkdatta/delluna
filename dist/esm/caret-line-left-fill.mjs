export const name="caret-line-left-fill";
export const id="dl_c758d2e4ce7949fcba2f";
export const url=new URL("../icons/caret-line-left-fill.svg?v=66922ab45d5a19c45dc6789f3b059a6f8df7d2a5bd76b2b6f5d1b2e946d16001",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
