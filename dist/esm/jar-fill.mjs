export const name="jar-fill";
export const id="dl_90570785c03f4b2791ca";
export const url=new URL("../icons/jar-fill.svg?v=708e1532215c15c2076ce1ac9c0cb59032e558991e28a856393149028a3bb81f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
