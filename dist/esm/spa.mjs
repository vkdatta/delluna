export const name="spa";
export const id="dl_2cf73e7784beedd8c680";
export const url=new URL("../icons/spa.svg?v=d25c364e06e7171230fac95061cd8c66f0ed129ef30ec4a49ffed626bd1e0a9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
