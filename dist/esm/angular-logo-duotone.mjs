export const name="angular-logo-duotone";
export const id="dl_5a96c6a5557740dd900c";
export const url=new URL("../icons/angular-logo-duotone.svg?v=99c901a0ec6ec4dcf51c4315bf1b147999f294c060e62af0a23a121a296831c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
