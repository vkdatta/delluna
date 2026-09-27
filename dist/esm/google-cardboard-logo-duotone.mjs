export const name="google-cardboard-logo-duotone";
export const id="dl_8ba4a03a5eee474aa60a";
export const url=new URL("../icons/google-cardboard-logo-duotone.svg?v=55d48fbce741992d73b05eb42387540b74c29b5df0ce8198c1883d7f10122640",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
