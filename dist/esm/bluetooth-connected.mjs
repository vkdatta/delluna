export const name="bluetooth-connected";
export const id="dl_3eb2b0df33294089abd5";
export const url=new URL("../icons/bluetooth-connected.svg?v=cc66d8ed850df0b234ddb2d6cf28a7fe3c2fa1c51d0859c97b27d0c23b71d621",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
