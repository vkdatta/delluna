export const name="align_center-fill";
export const id="dl_59e899cfbf0187a643b3";
export const url=new URL("../icons/align_center-fill.svg?v=a50dd375f5aa3c2437e6f4e0913c9c1d057c35740f781db328ac9a352bf93f81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
