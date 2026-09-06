export const name="arrow-line-right-light";
export const id="dl_d3500129f3e448d0a42a";
export const url=new URL("../icons/arrow-line-right-light.svg?v=a469a7693b233162f8dab8000f3e57566ec7e2ceb6d2499292763fd889762a29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
