export const name="drive_file_move-fill";
export const id="dl_7698f6a16080c634595b";
export const url=new URL("../icons/drive_file_move-fill.svg?v=4fdf29f06ee11e3533707aee0cf2d9db2d7ef28701d9d2fa0bea0a86e2f0e375",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
