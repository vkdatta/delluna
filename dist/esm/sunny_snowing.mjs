export const name="sunny_snowing";
export const id="dl_9493fc173287fe2caa8c";
export const url=new URL("../icons/sunny_snowing.svg?v=4d970ad09b8746842b2424fab008ce99075be810659f906823c09359c3c2c35c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
