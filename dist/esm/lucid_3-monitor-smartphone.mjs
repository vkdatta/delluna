export const name="lucid_3-monitor-smartphone";
export const id="dl_c86bd0bb90fb48f197eb";
export const url=new URL("../icons/lucid_3-monitor-smartphone.svg?v=0efc1190813f8efe429e5353eaee923f9b4431d780aae6d6a6a2d6363f256858",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
