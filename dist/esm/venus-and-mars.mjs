export const name="venus-and-mars";
export const id="dl_ea756cbab4a74ad6a253";
export const url=new URL("../icons/venus-and-mars.svg?v=e2c191e94670f52d6a7e1ab17042b9e8a95b339ad81080c686f90fbd54cd2e6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
