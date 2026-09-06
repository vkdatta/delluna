export const name="butterfly-thin";
export const id="dl_459325d906fe42c8b881";
export const url=new URL("../icons/butterfly-thin.svg?v=96c285ca23be2118b91a452b64a2471792b969befe22508421ad18cd995caa8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
