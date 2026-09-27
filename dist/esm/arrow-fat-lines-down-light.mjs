export const name="arrow-fat-lines-down-light";
export const id="dl_3d1f29ed9091439d9c5a";
export const url=new URL("../icons/arrow-fat-lines-down-light.svg?v=4265477e7b52e4346154ead1506331892e63b7e4f463700a4bf4cfa868f4bac2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
