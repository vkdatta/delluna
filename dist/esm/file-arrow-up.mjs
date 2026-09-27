export const name="file-arrow-up";
export const id="dl_34d8291e9ff348d9951b";
export const url=new URL("../icons/file-arrow-up.svg?v=e7b41de5c9dcfc49a4725b83cadfd6a5a155886ad14b7c3ca330a77b62d10dc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
