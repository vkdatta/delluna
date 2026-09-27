export const name="hvac";
export const id="dl_4cb0dd948473cf68e994";
export const url=new URL("../icons/hvac.svg?v=13fd5bbd13f608278feef176f2548fb1718d5d311355f9c7f6f4a8af6c1b4735",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
