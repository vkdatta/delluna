export const name="arrow-line-right-fill";
export const id="dl_f86875a0f0fb440ebe54";
export const url=new URL("../icons/arrow-line-right-fill.svg?v=5b7570ac83a5ecca6c1c3371442f0994528d6491a73706dcccc5819633dde31b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
