export const name="arrow-square-left";
export const id="dl_d81592bc7f5c4ed4a918";
export const url=new URL("../icons/arrow-square-left.svg?v=74608b347f9d0d825db0df2764d50b5d65707d2bb1b8b5b7df680ea1499c088d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
