export const name="ad_group-fill";
export const id="dl_17d575f63e3c4da58eb3";
export const url=new URL("../icons/A/ad_group-fill.svg?v=bf1482c5c0e56944ce271676ab77e7202862c872b28bfb73bf15e94b5d3d5ac9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
