export const name="zodiac-cancer";
export const id="dl_bff9ad3980ce448193a0";
export const url=new URL("../icons/zodiac-cancer.svg?v=4d818a8e3bcb330a77f2fafc034ca8ce550a0fdc6dce0500c67f5af3b3227a3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
