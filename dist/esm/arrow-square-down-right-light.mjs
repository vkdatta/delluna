export const name="arrow-square-down-right-light";
export const id="dl_d56e67b0f7d6483eacad";
export const url=new URL("../icons/arrow-square-down-right-light.svg?v=1878daf4db77ce866be93c177a312881afe024d73c94c159d43c7a2f3c2a9035",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
