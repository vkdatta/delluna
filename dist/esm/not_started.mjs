export const name="not_started";
export const id="dl_e2aac58f68e2859822b5";
export const url=new URL("../icons/not_started.svg?v=71353abd6ee954a5b2caad74cf59695c05a845d630c9fe3eb360e9d6725788d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
