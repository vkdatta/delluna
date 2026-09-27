export const name="bug-bold";
export const id="dl_0caa701d6ccc4188873b";
export const url=new URL("../icons/bug-bold.svg?v=89fec8551356d1edb35e39d9c6b48dab07c9ce4eabfbfb340c998862e5bb50ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
