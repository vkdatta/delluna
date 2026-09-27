export const name="how_to_vote-fill";
export const id="dl_077116df0bd5f226c55b";
export const url=new URL("../icons/how_to_vote-fill.svg?v=c0984f2b422b90602243e8f663ae2c5fdd7ef0db3edf93f452f0eb03a61c4bbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
