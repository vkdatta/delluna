export const name="sign-in-thin";
export const id="dl_6b90a4c568257f5e4de3";
export const url=new URL("../icons/sign-in-thin.svg?v=2f79fda9a249152f6ade52299859e9cd1e8b4ae3509249f6b639cc9b1cfe44de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
