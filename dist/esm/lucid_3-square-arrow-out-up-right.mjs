export const name="lucid_3-square-arrow-out-up-right";
export const id="dl_8d8908287ebc457a8eec";
export const url=new URL("../icons/lucid_3-square-arrow-out-up-right.svg?v=f6f372a7371afb99daa197dc7537f7cbfea4d38ba5c2a6d2fb4722a7a97eb670",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
