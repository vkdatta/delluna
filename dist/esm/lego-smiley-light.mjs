export const name="lego-smiley-light";
export const id="dl_002ca19cb1f94e8586eb";
export const url=new URL("../icons/lego-smiley-light.svg?v=36f0e6eb55b9eb8da34cab001676a2460a9c5be9e739f4a39ca3ca1e90b4be3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
