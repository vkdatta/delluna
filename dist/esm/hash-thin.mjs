export const name="hash-thin";
export const id="dl_32030ee6f8fa45a99c0a";
export const url=new URL("../icons/hash-thin.svg?v=9f791f5c7fd6f2bad1fc342cd12171044e66ba2dcbda5ef4a90b0396be95b105",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
