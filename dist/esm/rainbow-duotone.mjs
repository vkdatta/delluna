export const name="rainbow-duotone";
export const id="dl_dc475f48078a4b9fa288";
export const url=new URL("../icons/rainbow-duotone.svg?v=2e346e0cbb36f972121301e2c11c3aa6f0dc90cabfaaffbeee7c3ac102a77f37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
