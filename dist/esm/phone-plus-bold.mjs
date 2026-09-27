export const name="phone-plus-bold";
export const id="dl_61831c0e48ac4db5ac56";
export const url=new URL("../icons/phone-plus-bold.svg?v=95457d11afc52895ee4b2fa5d07d25052b7e57ac8a624b7f6f72244df455cc6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
