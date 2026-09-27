export const name="gradient-bold";
export const id="dl_dd44df090f504e09a8ea";
export const url=new URL("../icons/gradient-bold.svg?v=f321ca7037f7fbc496208d412e6c906f6e9fa8b259a0385a775d4f75757ad8ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
