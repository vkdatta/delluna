export const name="oven-duotone";
export const id="dl_b33fa6529eda425585a1";
export const url=new URL("../icons/oven-duotone.svg?v=72303b7309f630917a40d714a384b84fbbabd842fb9440c32626bbde1e15e916",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
