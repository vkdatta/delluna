export const name="scooter-fill";
export const id="dl_019e4e65d26c46ad9ae4";
export const url=new URL("../icons/S/scooter-fill.svg?v=b42e1376ed92b069296d251765f8be953dd1c265b9df81c682c20938e7e644b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
