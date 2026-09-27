export const name="japanese_curry-fill";
export const id="dl_f25baab996d252edad70";
export const url=new URL("../icons/japanese_curry-fill.svg?v=f1de3af7b3dad0ceef2b6a2a6c48573d9ab8c322024fafc5c7ead2020efd8bd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
