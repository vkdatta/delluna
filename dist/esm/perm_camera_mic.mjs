export const name="perm_camera_mic";
export const id="dl_ac06f8d004aa4f84b9d8";
export const url=new URL("../icons/P/perm_camera_mic.svg?v=edf869c6f3c56d6457df1c13b5afb6d581ee6d69c12e1e42cf7361be1a69e9ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
