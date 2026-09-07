export const name="memory-fill";
export const id="dl_db945657a2014f06a1fb";
export const url=new URL("../icons/memory-fill.svg?v=6b0b1825e827a3b10a5e2a08a8127d58df85a5785deb4f90531062d83b7e8635",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
