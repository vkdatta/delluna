export const name="heart-straight-break";
export const id="dl_97d0fd2b24174c0f99b3";
export const url=new URL("../icons/heart-straight-break.svg?v=d78d4d7e0be5d0289d2be0eb413208cdf286072da8e6eec0938321092c33894f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
