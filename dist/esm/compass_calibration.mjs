export const name="compass_calibration";
export const id="dl_8f164363c02f2d4277bd";
export const url=new URL("../icons/compass_calibration.svg?v=6a3cdff6f7ec42edb1729fb15bc779b8c643ae15bb51fe074ea36d599d8c5725",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
