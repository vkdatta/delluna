export const name="speed_2x-fill";
export const id="dl_0e07ad332980390b1d12";
export const url=new URL("../icons/speed_2x-fill.svg?v=466da291643b834db8b9fde70efce6188b7527e6bdc35c1882d605a1c3265aaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
