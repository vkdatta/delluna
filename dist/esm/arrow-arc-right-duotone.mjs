export const name="arrow-arc-right-duotone";
export const id="dl_f0404604b2754c679618";
export const url=new URL("../icons/arrow-arc-right-duotone.svg?v=f2e70af956442e377bebb4240fe04a724f94eebdb3d3b7a76bb27f9d974aaa2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
