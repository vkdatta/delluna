export const name="lucid_1-car";
export const id="dl_86a311e777034361bd5b";
export const url=new URL("../icons/lucid_1-car.svg?v=ab29b812940fd159b64e5d3ef89922b80e75888da73aff644249aef71df2a8e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
