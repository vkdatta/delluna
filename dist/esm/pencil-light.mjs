export const name="pencil-light";
export const id="dl_2f2f3bde82564ed39d5c";
export const url=new URL("../icons/pencil-light.svg?v=968bad1538f55abd76cc836247c025cfaba20404f4e06b504aa7cea0dd015762",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
