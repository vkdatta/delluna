export const name="egg";
export const id="dl_50f53e773ecc4bdc8bd0";
export const url=new URL("../icons/egg.svg?v=ac71caa3100a5b2f5364bcff65ec1a583f5669d0d05d045524e2f59200582554",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
