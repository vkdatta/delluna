export const name="lucid_3-panels-top-left";
export const id="dl_237bb50671524639bf23";
export const url=new URL("../icons/lucid_3-panels-top-left.svg?v=7b9b3647127f0ff0d9d9d291ea0d3a4668d825c4d9db2572aad0782b10de8786",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
