export const name="person_4-fill";
export const id="dl_0af329f4ed4bde62c815";
export const url=new URL("../icons/person_4-fill.svg?v=6f95cdf4eb6463d203f9d2cd3c198e1ad2bbb5c6d0f4da63a3030c0601ab6393",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
