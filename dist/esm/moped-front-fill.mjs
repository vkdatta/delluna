export const name="moped-front-fill";
export const id="dl_3af1d676029644329c33";
export const url=new URL("../icons/moped-front-fill.svg?v=27321bb6e0351dfb76b0775c91f1a037f5c0ad1a952ccaabf05b3854bf83ee22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
