export const name="tamper_detection_off";
export const id="dl_ecde258768c3930e96b8";
export const url=new URL("../icons/tamper_detection_off.svg?v=4c3916bb3e1ce36863da37febedd73bd308383d6c077d450b130bb0b50ac8aed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
