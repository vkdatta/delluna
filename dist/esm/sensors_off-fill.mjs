export const name="sensors_off-fill";
export const id="dl_6c577e75708ebb623b93";
export const url=new URL("../icons/sensors_off-fill.svg?v=b5344149e2fd93018f050c66dacce97d049d2a0ca6c2c45845295732d44fbdf3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
