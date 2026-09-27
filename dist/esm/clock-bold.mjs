export const name="clock-bold";
export const id="dl_2c896565bea64c599987";
export const url=new URL("../icons/clock-bold.svg?v=fdcd3565ba9696ce8eb87a2f249d5bbafd77f71e38f1ad45446c5d88661166fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
