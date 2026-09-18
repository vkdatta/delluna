export const name="mobile_arrow_up_right-fill";
export const id="dl_1bfac3afa9d248f9bb9b";
export const url=new URL("../icons/M/mobile_arrow_up_right-fill.svg?v=b82a49e6731d507feea48897eb8ed9c7d3c29ae23216101d98b4498a89f4ddb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
