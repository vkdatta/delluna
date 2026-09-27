export const name="security-camera-bold";
export const id="dl_3b0ffe247ef02221cbf8";
export const url=new URL("../icons/security-camera-bold.svg?v=f4c52f57b8f5df12d9edff316fe1b77177b832ba14576af3e9ffe9b255570ea6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
