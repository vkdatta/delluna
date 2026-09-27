export const name="split-vertical-fill";
export const id="dl_9fa6cdf4da8de793f9d3";
export const url=new URL("../icons/split-vertical-fill.svg?v=9dce6fee16455eed881d597c0a662956a629fa8d594c72e7bbf803533e94e5d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
