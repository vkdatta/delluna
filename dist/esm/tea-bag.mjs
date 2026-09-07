export const name="tea-bag";
export const id="dl_04e852c1af264de29897";
export const url=new URL("../icons/T/tea-bag.svg?v=2c7a476db178745d868a70a1b765d0283558abfd26e2c239ce2fb9f7fcd4b65b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
