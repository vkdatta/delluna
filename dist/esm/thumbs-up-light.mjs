export const name="thumbs-up-light";
export const id="dl_ee5fe91ca5c0b44dece2";
export const url=new URL("../icons/thumbs-up-light.svg?v=f480dcc9768f59f9337b7733a7cd7c1172cca3ee222d8c9657990fa9eeb8fa1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
