export const name="keep_public";
export const id="dl_a755f174825f0ebfc794";
export const url=new URL("../icons/keep_public.svg?v=47694db2c29a05caeb8660aa1df2bd585d41cdcea115edfa2016734b0a14630c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
