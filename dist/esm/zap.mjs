export const name="zap";
export const id="dl_b7554e601ec84c9dba78";
export const url=new URL("../icons/zap.svg?v=3ab48bad0b241eaf73c194c59b2febe2c46cf7e40dedad88ac09f5a9f9d51fd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
