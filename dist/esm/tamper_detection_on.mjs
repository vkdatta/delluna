export const name="tamper_detection_on";
export const id="dl_441d526747da8e0b2efa";
export const url=new URL("../icons/tamper_detection_on.svg?v=86d8517f4fd8bd06950bb15b0129897a2c778410355f1bd78291945070bad354",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
