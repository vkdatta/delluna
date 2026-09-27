export const name="gender-female-duotone";
export const id="dl_5372a9de0cbe4c1aba0a";
export const url=new URL("../icons/gender-female-duotone.svg?v=5db97ef8c7c58dd70d8206122359eed420b94f2bf03686bb44f8be4ab5938c97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
