export const name="explore_off-fill";
export const id="dl_43eccdd01ffd42ddbc60";
export const url=new URL("../icons/E/explore_off-fill.svg?v=53aaa7458c0114164fb67676ba629a52b6c728fa1849db69650e366865ce8749",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
