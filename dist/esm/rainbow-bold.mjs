export const name="rainbow-bold";
export const id="dl_2dc8ea47f84a44c7ac8f";
export const url=new URL("../icons/rainbow-bold.svg?v=6bad94e4094426e375918adb58c11c864f0307cb0737ef73e008509f2f03ce38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
