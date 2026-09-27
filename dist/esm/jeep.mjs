export const name="jeep";
export const id="dl_af64b51e0062469caaf5";
export const url=new URL("../icons/jeep.svg?v=0a74eb07469c8392f08a168d86c83d2429e4753621a10819fb3f02d6d64219d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
