export const name="arrow-u-down-right-duotone";
export const id="dl_728f9c8b23aa4710a0dd";
export const url=new URL("../icons/arrow-u-down-right-duotone.svg?v=963b46ed35a09599474f666bff89a46cca5d1b8860a61ad8b09cff91c094f9c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
