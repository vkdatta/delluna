export const name="baseball-thin";
export const id="dl_0ed3998b6f2d4418b2aa";
export const url=new URL("../icons/baseball-thin.svg?v=02e4801fc72f542e80a5ccdda355d6e7e549c1d7f2d6d6bdc606a5c2f7c11f0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
