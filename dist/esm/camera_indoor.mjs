export const name="camera_indoor";
export const id="dl_3790fc27a3e34ca5b28c";
export const url=new URL("../icons/camera_indoor.svg?v=bd45a0bd8caef71f0a19b73e90d690896702f5f16d556a1730014982b08274ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
