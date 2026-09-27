export const name="vo2_max-fill";
export const id="dl_9606588e95d1d69f3ba3";
export const url=new URL("../icons/vo2_max-fill.svg?v=35575f1d2f47821f7197c641021814eb5f2b273be3de5f47e08ef6f3bab31813",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
