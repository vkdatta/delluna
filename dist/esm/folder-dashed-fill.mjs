export const name="folder-dashed-fill";
export const id="dl_e0608c02633349768a08";
export const url=new URL("../icons/folder-dashed-fill.svg?v=5927664d7f6bc9c018febfd9a6f1f78f22f683d7bac8d5e4d2f202bf0e44e94d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
