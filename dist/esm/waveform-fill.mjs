export const name="waveform-fill";
export const id="dl_4e24c8e54cf4c5be8501";
export const url=new URL("../icons/waveform-fill.svg?v=e7701d718677d453dc551df804514cacc4056c7d96409bb448c86b72228ec210",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
