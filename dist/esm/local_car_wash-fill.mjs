export const name="local_car_wash-fill";
export const id="dl_9b5d6cac26384760b77c";
export const url=new URL("../icons/L/local_car_wash-fill.svg?v=ba760c6205b8ccd76365d5dc371ffe959fbc3935a15c005b788b8cdba3bd55a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
