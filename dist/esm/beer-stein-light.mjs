export const name="beer-stein-light";
export const id="dl_3911307735c74e1aad10";
export const url=new URL("../icons/beer-stein-light.svg?v=b059955e14a8e43a470c98484beca6f7d02d1b115d57959c8100fa77c053dab5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
