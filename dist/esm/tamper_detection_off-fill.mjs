export const name="tamper_detection_off-fill";
export const id="dl_618130506bcc9350b921";
export const url=new URL("../icons/tamper_detection_off-fill.svg?v=353294356d8787906063797d5e0c07844d1c864485fad6e2d21e80ec0f8a152b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
