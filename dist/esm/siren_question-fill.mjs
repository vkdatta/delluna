export const name="siren_question-fill";
export const id="dl_1c6e16eef2b4f5bd571a";
export const url=new URL("../icons/siren_question-fill.svg?v=1549f8d4f66b9d0ddd2fcf1116af62e6bad81a2bd16b484c6f2ec72b3ea467fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
