export const name="toilet-thin";
export const id="dl_0c3909f0a5c1446f888d";
export const url=new URL("../icons/T/toilet-thin.svg?v=6b0d47ae4a1df2c613facbbe6a4757cf284cfa3f67206199b0925093184101bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
