export const name="waveform-bold";
export const id="dl_702de7595f2c4fbeb1da";
export const url=new URL("../icons/W/waveform-bold.svg?v=d9f45452d0caf9ef321d3b506dd56442216c042f3d8daab9ba760e2e94c7b09e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
