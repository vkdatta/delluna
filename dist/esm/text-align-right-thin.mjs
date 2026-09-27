export const name="text-align-right-thin";
export const id="dl_b45181d2b67982d04f98";
export const url=new URL("../icons/text-align-right-thin.svg?v=07857518689be459d7cfea546e3617792dfa9cd044deef96cde7eeef12d3ea9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
