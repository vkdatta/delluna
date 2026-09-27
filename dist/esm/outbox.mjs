export const name="outbox";
export const id="dl_ed6317d292772f18c17d";
export const url=new URL("../icons/outbox.svg?v=3a99c196eb5fc7e1655d55f3e6794f7b8888bee00e79df98bc8a24f4033893e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
