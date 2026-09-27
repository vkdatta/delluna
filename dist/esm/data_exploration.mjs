export const name="data_exploration";
export const id="dl_f27ddae9cd8a684f4f40";
export const url=new URL("../icons/data_exploration.svg?v=a5236f0c25373415e52b4746851be82968ac5e6a2c65e03874f4d17932e3eac6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
