export const name="security-camera-duotone";
export const id="dl_1283f6f02d304be6a86a";
export const url=new URL("../icons/S/security-camera-duotone.svg?v=24cc0681c5b6544b38bcf2bc0355f5de4f9337c293dc525e7716472de1eea781",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
