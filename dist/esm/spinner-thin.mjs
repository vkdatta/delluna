export const name="spinner-thin";
export const id="dl_89850f04dae90f99a8bb";
export const url=new URL("../icons/spinner-thin.svg?v=75787ed74c7c7a42fa707ec0e5e291d603b24ea1ad088b0269f77b4f7778de84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
