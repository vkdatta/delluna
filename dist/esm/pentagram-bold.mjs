export const name="pentagram-bold";
export const id="dl_5661f6563c3245bf8cd0";
export const url=new URL("../icons/pentagram-bold.svg?v=29967a240a40b9a30a36022884e20563873f2540f9ae6e5f8d88c762c2707d85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
