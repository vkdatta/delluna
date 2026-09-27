export const name="lucid_3-play-off";
export const id="dl_4d5795264b6f419eb15c";
export const url=new URL("../icons/lucid_3-play-off.svg?v=bd62112d50583285d4315a1793c410cd2abc496cdccbf1b4606f1b218e8bd772",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
