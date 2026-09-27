export const name="touchpad";
export const id="dl_abb1fc7a0f994e898400";
export const url=new URL("../icons/touchpad.svg?v=cfe4185b641e8ce9ec3c85da27941d5fab6beaa483117529c12d65d053b59839",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
