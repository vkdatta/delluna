export const name="allergies";
export const id="dl_13df467b9ce56568fd7e";
export const url=new URL("../icons/allergies.svg?v=461f486b30c2683484d9c4510bc267807c352f7d6d72fa78741daa7771e66e09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
