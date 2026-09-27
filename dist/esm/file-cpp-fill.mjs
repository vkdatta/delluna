export const name="file-cpp-fill";
export const id="dl_dae0b6d34f0c4b43bf54";
export const url=new URL("../icons/file-cpp-fill.svg?v=f05e96218698137f08829f61727040ad57961347c9669b33bb2dfb0174444351",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
