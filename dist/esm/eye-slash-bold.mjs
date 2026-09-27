export const name="eye-slash-bold";
export const id="dl_127afbde007a49a89d4b";
export const url=new URL("../icons/eye-slash-bold.svg?v=f7f4f09443f06adb864f730e85a3c059e1481f90eaaf82c92b35a2a502ac00de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
