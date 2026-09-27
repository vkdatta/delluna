export const name="virus-duotone";
export const id="dl_24c50eebcf62230cb633";
export const url=new URL("../icons/virus-duotone.svg?v=e6d2ee16f605b5e96ddf49d543905325abf7fa1856538078a357ffa1f6cad38c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
