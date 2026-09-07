export const name="thermometer-hot-duotone";
export const id="dl_8b00933b68464ebd8881";
export const url=new URL("../icons/T/thermometer-hot-duotone.svg?v=127534b4f77c0b0e3e81e4bcf8234520e132c26f1250115697694012205f2d0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
