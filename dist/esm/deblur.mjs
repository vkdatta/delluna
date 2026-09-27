export const name="deblur";
export const id="dl_5471a2f29a8b82cecd61";
export const url=new URL("../icons/deblur.svg?v=3657b3e39221c8baf14b54a22be08075f06cb3c6dcc9893a82677dd550d775d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
