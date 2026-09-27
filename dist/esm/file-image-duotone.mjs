export const name="file-image-duotone";
export const id="dl_32f97d4af89f4b97aef5";
export const url=new URL("../icons/file-image-duotone.svg?v=e082730715060b52d14fda772ec9cc498641f715a876a0494056dbbb6fcb74ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
