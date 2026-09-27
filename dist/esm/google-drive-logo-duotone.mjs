export const name="google-drive-logo-duotone";
export const id="dl_4cccd58034da468e9f53";
export const url=new URL("../icons/google-drive-logo-duotone.svg?v=a7a9be744cdefaa320cf2add9fc982a4fffc4b95a3ca99bd0a686fa9058df56d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
