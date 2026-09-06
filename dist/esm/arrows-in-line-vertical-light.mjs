export const name="arrows-in-line-vertical-light";
export const id="dl_11a0406092704e8ea4b7";
export const url=new URL("../icons/arrows-in-line-vertical-light.svg?v=9c345e2c873eeb26dd156544b255793f4b0eefd6a2f5b038d83ce36bc2fb46a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
