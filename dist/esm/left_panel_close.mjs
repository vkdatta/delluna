export const name="left_panel_close";
export const id="dl_cc1f7e585c8478d95d90";
export const url=new URL("../icons/left_panel_close.svg?v=4869957bb4de53f4813bc7a0ad576dfd1d198547fd7486b323c5092b817dac08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
