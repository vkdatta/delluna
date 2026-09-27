export const name="lucid_3-qr-code";
export const id="dl_f7e5fec8aed3483c9473";
export const url=new URL("../icons/lucid_3-qr-code.svg?v=00afe68cb87ab3dae2192fd95c9b25ba9a71762b1856fde2647276fda8a2203f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
