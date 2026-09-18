export const name="alarm_pause-fill";
export const id="dl_c5631104b556468e8fd0";
export const url=new URL("../icons/alarm_pause-fill.svg?v=46a38dc382a993b6812103a26695f9de7ede67a27953ab6f1f0c981f7a5c31b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
