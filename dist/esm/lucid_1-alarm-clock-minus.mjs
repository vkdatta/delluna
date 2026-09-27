export const name="lucid_1-alarm-clock-minus";
export const id="dl_b4b1ee85ae5a47e9b203";
export const url=new URL("../icons/lucid_1-alarm-clock-minus.svg?v=b8d9a3b78089cb1ad0d27e13c338360bc2d58f94f17862d707d96d7e4e1c4f6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
