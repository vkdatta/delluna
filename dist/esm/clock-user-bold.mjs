export const name="clock-user-bold";
export const id="dl_e52bdd620cee4fe79072";
export const url=new URL("../icons/clock-user-bold.svg?v=97e2502f565e657ff998cbe0b790553e2e1d6607d071ecfe8b8395b3f94c6917",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
