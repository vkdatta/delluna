export const name="badminton-fill";
export const id="dl_2c7a12e84aea4065ab50";
export const url=new URL("../icons/badminton-fill.svg?v=c45dfc4c7039f440cf68f38852ed836eeac175d79b4b8ea45137a14b5a20fae8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
