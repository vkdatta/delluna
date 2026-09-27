export const name="check-square-offset-duotone";
export const id="dl_4702fded57124b20ae84";
export const url=new URL("../icons/check-square-offset-duotone.svg?v=e1f3bcc90e09f8345546a727c2cae7503955a3a92ca8cc1c53ff10951ec2c156",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
