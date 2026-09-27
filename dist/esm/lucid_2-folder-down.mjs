export const name="lucid_2-folder-down";
export const id="dl_308e95718abb4d35b0b0";
export const url=new URL("../icons/lucid_2-folder-down.svg?v=3cfe062763031225d69b26910cc343b3dcabb72b2fcd4c8b7dafe23b7eda4f83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
