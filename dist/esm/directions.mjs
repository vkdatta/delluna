export const name="directions";
export const id="dl_63a543b0a8fe818ce146";
export const url=new URL("../icons/directions.svg?v=ae589604459376ee385191f2aa4de79e94248e256180d31ae8a6bc966c5930fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
