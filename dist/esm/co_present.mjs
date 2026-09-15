export const name="co_present";
export const id="dl_a1aaf8c7049042f18a93";
export const url=new URL("../icons/C/co_present.svg?v=a9385edeff7a7ddb725746c41aba816f60a67e50a213f488074bf4ac8a09ec33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
