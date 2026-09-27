export const name="subtract-square-duotone";
export const id="dl_8f4b564fd5373a4367ef";
export const url=new URL("../icons/subtract-square-duotone.svg?v=a37b36ea28b70e3201b02542e7c6635252e5f500b68633b8108ee3837fe40d4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
