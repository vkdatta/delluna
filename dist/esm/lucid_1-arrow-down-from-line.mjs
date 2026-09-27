export const name="lucid_1-arrow-down-from-line";
export const id="dl_0a1d92bb097948eea3b9";
export const url=new URL("../icons/lucid_1-arrow-down-from-line.svg?v=60a8e16f3af3f99af3f52cf95d9ab273f833386918fa8f7438ef639f3c6f0791",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
