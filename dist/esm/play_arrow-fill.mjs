export const name="play_arrow-fill";
export const id="dl_68eeead8ab5d48b3162c";
export const url=new URL("../icons/play_arrow-fill.svg?v=5c765ac9b0ba2194de1f7d88657c43a6d7509a1351f8d45e28f594d700afaab6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
