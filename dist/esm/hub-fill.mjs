export const name="hub-fill";
export const id="dl_069b5ad7d4a64f06bc79";
export const url=new URL("../icons/hub-fill.svg?v=d0749e43ff4877792f2a2c2cada10bc3c22fa923f2d35d51e94d6029e0b87ff3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
