export const name="tooth-fill";
export const id="dl_40a1bc31b092cc2369c0";
export const url=new URL("../icons/tooth-fill.svg?v=1ec173ef75f4e3b3b705e99ccf731451c49e0b63653cb715ba3b10c7eb09137d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
