export const name="person_off-fill";
export const id="dl_30237737d11bf0ab2501";
export const url=new URL("../icons/person_off-fill.svg?v=02f1205514996d5456325653d7ef47a0993dddef0997716233f9db59dd11086f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
