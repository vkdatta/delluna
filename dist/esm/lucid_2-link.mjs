export const name="lucid_2-link";
export const id="dl_fdc015ec6e364204bec0";
export const url=new URL("../icons/lucid_2-link.svg?v=49a50faa4dd66581290286e93b5437eef2eb53e5d2b1056b465819e90d13d06e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
