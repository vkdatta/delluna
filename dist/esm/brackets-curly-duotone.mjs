export const name="brackets-curly-duotone";
export const id="dl_2573728b5f3340cb8906";
export const url=new URL("../icons/brackets-curly-duotone.svg?v=c40fecf1305a4783a70370531150e7c94a530f2790bf35972887acb44cdf7e77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
