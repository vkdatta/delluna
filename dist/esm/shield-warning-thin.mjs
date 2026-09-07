export const name="shield-warning-thin";
export const id="dl_d2ab46df369a4322bb87";
export const url=new URL("../icons/S/shield-warning-thin.svg?v=adb676aab8708e9f0495b82e91e78d561cb1c8fb7074253ce3461a4bbeb5f42e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
