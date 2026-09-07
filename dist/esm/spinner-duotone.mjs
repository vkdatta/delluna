export const name="spinner-duotone";
export const id="dl_c1c6e94f5e3e4a9ca53b";
export const url=new URL("../icons/S/spinner-duotone.svg?v=93c7cc4bae5469a06ac818ada2d700a0ab1d7486f66017a2d8c4e92c336b8bc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
