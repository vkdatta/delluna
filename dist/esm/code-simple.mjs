export const name="code-simple";
export const id="dl_b3517280d91a45dcb74a";
export const url=new URL("../icons/code-simple.svg?v=53c58100f9ba2ac1340388362fe453373c2487d244b55d70f692984ad55f8bf9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
