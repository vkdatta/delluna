export const name="mask-happy-light";
export const id="dl_56047b8bdf3c497d8249";
export const url=new URL("../icons/mask-happy-light.svg?v=ac79b8a9489014f8f984510dc3b9dd7af203dd30a5b9afec5702a65008717896",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
