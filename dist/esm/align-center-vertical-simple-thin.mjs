export const name="align-center-vertical-simple-thin";
export const id="dl_8de8cefc20b2430d9b35";
export const url=new URL("../icons/align-center-vertical-simple-thin.svg?v=64b00bba827ced543f6a39bae66cdf7a691b93247debe776125afab5145cd1e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
