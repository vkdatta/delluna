export const name="siren-light";
export const id="dl_7cf9be9e16aad1d9abe9";
export const url=new URL("../icons/siren-light.svg?v=c60a611957456c6b553c0c528c64759ce9f8e1a81c63d04ee2f6af25423b3e53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
