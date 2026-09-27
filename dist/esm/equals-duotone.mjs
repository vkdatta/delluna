export const name="equals-duotone";
export const id="dl_fe972eb70d7745aaa735";
export const url=new URL("../icons/equals-duotone.svg?v=caa2e82ff2c6a3092b33605108ac891c886babe426836fa93e06f49bd234678b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
