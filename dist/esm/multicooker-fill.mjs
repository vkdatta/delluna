export const name="multicooker-fill";
export const id="dl_79ce95fd31dd87db03e8";
export const url=new URL("../icons/multicooker-fill.svg?v=7ff56623490681475c683e6021f44ea50bd6fdebbc652a12e9f26ac25a1ab219",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
