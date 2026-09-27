export const name="lucid_1-book-open";
export const id="dl_59e2e1d0180247abba0d";
export const url=new URL("../icons/lucid_1-book-open.svg?v=41441f4dfbec6daed895fc6ffdaf1ce085c47e20e169795253141ba913be7b0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
