export const name="switch-camera";
export const id="dl_ecb9632c1ab141b5bce6";
export const url=new URL("../icons/switch-camera.svg?v=b8af097623d744e779eb69a0d3074c5b9213477a72c20b868e89b4786fbf9a7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
