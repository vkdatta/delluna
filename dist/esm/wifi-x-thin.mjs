export const name="wifi-x-thin";
export const id="dl_59f33469496343fd98ef";
export const url=new URL("../icons/W/wifi-x-thin.svg?v=6cddbd1b16fdc0f3d27ccd174a1476719acd56ecea24fcbf142f08bf277d510c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
