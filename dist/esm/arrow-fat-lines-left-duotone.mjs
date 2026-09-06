export const name="arrow-fat-lines-left-duotone";
export const id="dl_638df5c0b0794133b04c";
export const url=new URL("../icons/arrow-fat-lines-left-duotone.svg?v=94e23842e3978d1dd0ad1dd6b208f82f6a5f7e13e692345ee5c9e5fc0af0048f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
