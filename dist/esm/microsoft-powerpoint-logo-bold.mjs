export const name="microsoft-powerpoint-logo-bold";
export const id="dl_1daf2f53d77142749e93";
export const url=new URL("../icons/microsoft-powerpoint-logo-bold.svg?v=bb7d2b78e539707e9aee111e0b4a014df6c28c7ff03f5f6691ac6511670deca6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
