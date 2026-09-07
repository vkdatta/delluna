export const name="arrow-clockwise-duotone";
export const id="dl_2d0c972adb7d4a4296f5";
export const url=new URL("../icons/arrow-clockwise-duotone.svg?v=66db0c380b84dcb949ab83e2670443c012c72e73c59197e1173cc9abc3abc781",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
