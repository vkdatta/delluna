export const name="synagogue-bold";
export const id="dl_54183622bec845a0bfb0";
export const url=new URL("../icons/S/synagogue-bold.svg?v=f3d8175d914c0adb85aede6a9c683e9949606d3bb838e6aa56af05f3c2be02c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
