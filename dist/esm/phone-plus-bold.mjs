export const name="phone-plus-bold";
export const id="dl_61831c0e48ac4db5ac56";
export const url=new URL("../icons/phone-plus-bold.svg?v=54bb2cf7dd7c00f3a16001899beedc0c71c37abc6e61acbf95582c132b4f7a14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
