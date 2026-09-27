export const name="arrow-clockwise-duotone";
export const id="dl_2d0c972adb7d4a4296f5";
export const url=new URL("../icons/arrow-clockwise-duotone.svg?v=db29434d030376ad11a3c347fd5588ef71732fabc0e17ab98a1d0647c63a223d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
