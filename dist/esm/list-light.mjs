export const name="list-light";
export const id="dl_7d91f5bc7e2d4bbcb256";
export const url=new URL("../icons/list-light.svg?v=cd368d1c4be6fe1249dae601746f454b55601ac77ba0434391263df3c150275a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
