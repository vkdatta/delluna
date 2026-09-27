export const name="pill-fill";
export const id="dl_9857fbbf3a3942979b10";
export const url=new URL("../icons/pill-fill.svg?v=cd923842d882979b67296826dd639318babb6b20d7b221987931ca0647e6409f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
