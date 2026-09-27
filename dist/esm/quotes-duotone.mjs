export const name="quotes-duotone";
export const id="dl_4cc977fa712f42508a2a";
export const url=new URL("../icons/quotes-duotone.svg?v=f8caf89c2338972f4433c8341790e6f5df7a51f3dd1f37342916ede3270e3ee5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
