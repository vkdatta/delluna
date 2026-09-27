export const name="format_h2-fill";
export const id="dl_20fd443f3715befddc91";
export const url=new URL("../icons/format_h2-fill.svg?v=2e1bc3e7a25556c74606be97ca69b12995a3407679eccc6b5a64fcd83ca17d52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
