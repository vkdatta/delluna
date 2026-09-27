export const name="mindfulness-fill";
export const id="dl_b85c7d1115981e45e721";
export const url=new URL("../icons/mindfulness-fill.svg?v=9a071c7754f1471aea27a8e6efb6f806c84cef8a797d459cd6a301101c86e918",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
