export const name="head-circuit-bold";
export const id="dl_95c468c7fa0048399434";
export const url=new URL("../icons/head-circuit-bold.svg?v=80cb8c6ff7d7f4f0d02d4154d25e7c13f80adff03656c53443a0447c38d46542",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
