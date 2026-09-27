export const name="window_sensor-fill";
export const id="dl_04458a504fd113dff814";
export const url=new URL("../icons/window_sensor-fill.svg?v=bd59e283a8494c157840c2acd2a42037c67f0222183bc24a6b379f4bc8bd4802",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
