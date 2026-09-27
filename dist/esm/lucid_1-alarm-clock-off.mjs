export const name="lucid_1-alarm-clock-off";
export const id="dl_cdace504fbb4401fafbd";
export const url=new URL("../icons/lucid_1-alarm-clock-off.svg?v=bc7d92409fcecf4ddba11e2a16246f2f37534657f1d7df6e07ac51f72fcbaa2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
