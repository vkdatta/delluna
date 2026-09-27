export const name="skip-back-circle-duotone";
export const id="dl_00ff9c21bd89415bd140";
export const url=new URL("../icons/skip-back-circle-duotone.svg?v=89c75815fe7c82437a7e15f4259b13b39fb15005ceda4ae70f759d7672b14a5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
