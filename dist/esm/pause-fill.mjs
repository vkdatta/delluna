export const name="pause-fill";
export const id="dl_6697f596ab8045d8b2fa";
export const url=new URL("../icons/pause-fill.svg?v=156d3cdfa5cea803caec50b35f49bc635070c8bd84e7fe78df94b025017ccee1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
