export const name="battery-warning-vertical";
export const id="dl_ab81505cebb94588b491";
export const url=new URL("../icons/battery-warning-vertical.svg?v=a10b6c1965f38f4799e78840205b1c116f35cb80e714a932e383ce1d8eab2b7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
