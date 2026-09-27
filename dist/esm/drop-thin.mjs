export const name="drop-thin";
export const id="dl_8502658fc6c443a2bcdb";
export const url=new URL("../icons/drop-thin.svg?v=43d992e945a780e1ab5f65b5b810bfed76b332d003d1049ed439f4862d9368d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
