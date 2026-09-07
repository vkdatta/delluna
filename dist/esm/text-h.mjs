export const name="text-h";
export const id="dl_62b3b571107c401d9db1";
export const url=new URL("../icons/T/text-h.svg?v=d47ab37cb36c25fa33c71bc4713ca43ee96303ac44b9c9c8bd9f6c52f47d7dce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
