export const name="code-simple-light";
export const id="dl_d4b2d89cd37f4e45872f";
export const url=new URL("../icons/code-simple-light.svg?v=3cf567548937eada7707356f759ad5384f3d3d9e4f0cd4bb1be3176cbc1c2242",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
