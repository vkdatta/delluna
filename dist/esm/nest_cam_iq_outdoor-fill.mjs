export const name="nest_cam_iq_outdoor-fill";
export const id="dl_af933a6139b04c6794aa";
export const url=new URL("../icons/nest_cam_iq_outdoor-fill.svg?v=297b64ec95ee9beb8e1a08c88a579440a01d912d4c289052fb3322214d181bf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
