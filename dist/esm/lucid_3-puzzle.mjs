export const name="lucid_3-puzzle";
export const id="dl_3b0c7b7a484c4e6e8251";
export const url=new URL("../icons/lucid_3-puzzle.svg?v=742367287ecd4dc959867f5779b280e230ece274703664597bcdd2d1d9379e94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
