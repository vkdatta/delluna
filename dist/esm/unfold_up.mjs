export const name="unfold_up";
export const id="dl_6b26cc31626888d62b7c";
export const url=new URL("../icons/unfold_up.svg?v=0a61b731eda0af2488b205bd27a70fb81c3cb6e8b8b231adc2432bf911a06719",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
