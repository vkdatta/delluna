export const name="background_dot_small-fill";
export const id="dl_edb057ff8974d00b0a35";
export const url=new URL("../icons/background_dot_small-fill.svg?v=24f4b146712211ba93de1920825a75f62eb8cd83ffecdfd33186e530ccac1403",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
