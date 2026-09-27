export const name="error_med";
export const id="dl_00497e2cf419fbe8cafd";
export const url=new URL("../icons/error_med.svg?v=59b666b78961a362a0b965f98c5955c28dcc656885629c7548dd855a07a4a5e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
