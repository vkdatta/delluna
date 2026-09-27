export const name="arrow-square-up-right-fill";
export const id="dl_beb9b39691474a7bb81e";
export const url=new URL("../icons/arrow-square-up-right-fill.svg?v=e93927cede6e97d1d98dacb62d13f93010222e9aaaf7e62fa6d669888b13a41d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
