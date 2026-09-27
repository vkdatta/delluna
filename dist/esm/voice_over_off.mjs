export const name="voice_over_off";
export const id="dl_f51cdfba17b75dbc6d50";
export const url=new URL("../icons/voice_over_off.svg?v=dbfb3cf2e9d975f5bb3f7fa3da64a0d608d03daed37340007eafd41d9698912e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
