export const name="domain_verification";
export const id="dl_30dc249f147c7c0db4ce";
export const url=new URL("../icons/domain_verification.svg?v=1423e6cabe2a33543e9f5d0f44bc1082650af4ccdc0f56c16356b5780a99aaf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
