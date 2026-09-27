export const name="switch_access";
export const id="dl_477fcc262ce3b04eb7c2";
export const url=new URL("../icons/switch_access.svg?v=92d0d164c9841953ca6f529434c81219fcf618de001ee84809c19002180fed34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
