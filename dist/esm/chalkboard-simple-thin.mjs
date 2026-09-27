export const name="chalkboard-simple-thin";
export const id="dl_e29f1a5156e3418ca650";
export const url=new URL("../icons/chalkboard-simple-thin.svg?v=88a0d15d57f48a749f89cbd813f1ffcf858cf29f68f79dac42054853c349bcc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
