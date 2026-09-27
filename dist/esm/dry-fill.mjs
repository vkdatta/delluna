export const name="dry-fill";
export const id="dl_bd4cdf630d7beedc676b";
export const url=new URL("../icons/dry-fill.svg?v=5aa6ff9ce993191c46885e55e94f32eed2a72225f47d60366accad3713d01da7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
