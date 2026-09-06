export const name="file-xls-duotone";
export const id="dl_f4814cc9637548d9a1e8";
export const url=new URL("../icons/file-xls-duotone.svg?v=fd093243c13ff0d0403f6e0b347613d983ea22e429f191419500cb9875e94f3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
