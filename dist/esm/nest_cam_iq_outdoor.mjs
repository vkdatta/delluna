export const name="nest_cam_iq_outdoor";
export const id="dl_a31652b20fd6890639f6";
export const url=new URL("../icons/nest_cam_iq_outdoor.svg?v=7a5b987e71475055a6945e7e5a801e2cba60dece263a64ef483e77fcf7fc1ba2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
