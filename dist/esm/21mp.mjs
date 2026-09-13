export const name="21mp";
export const id="dl_6e11dce8ab3e43aa8f23";
export const url=new URL("../icons/2/21mp.svg?v=120682b025e4168754a25cf5ab84b749193105939c60c7e0c47e2ecda9010245",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
