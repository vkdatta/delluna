export const name="arrow-u-left-down-fill";
export const id="dl_addb7e09bcc64bcea7ab";
export const url=new URL("../icons/arrow-u-left-down-fill.svg?v=34542190d8d42cd503b1c110595f09dde407271579dda01c9b93e8e98bd5e25f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
