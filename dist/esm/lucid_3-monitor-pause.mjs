export const name="lucid_3-monitor-pause";
export const id="dl_5bf65c55f50445b5adbd";
export const url=new URL("../icons/lucid_3-monitor-pause.svg?v=40ef5c0092996e5328a26b101223b415460f1c370ea34abb6a02f62038f249b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
