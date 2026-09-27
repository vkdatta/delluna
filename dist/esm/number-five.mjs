export const name="number-five";
export const id="dl_b04cb8e873e94a078326";
export const url=new URL("../icons/number-five.svg?v=4ba640e3826be6be09df5d52c6318f0239bcc33d836a673a761a62ccdca0987a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
