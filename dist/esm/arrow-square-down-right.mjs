export const name="arrow-square-down-right";
export const id="dl_e2c5efd46fc6454592f6";
export const url=new URL("../icons/arrow-square-down-right.svg?v=c5b3e678113834115ce2f075f10b9cec772021e256f8455d7454f85f633e82e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
