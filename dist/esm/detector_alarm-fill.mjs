export const name="detector_alarm-fill";
export const id="dl_fdc28836e9354196a20a";
export const url=new URL("../icons/detector_alarm-fill.svg?v=d363d702704d273583e7b4982ec6a0cf2153f057e7467bca74aa750227d49b45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
