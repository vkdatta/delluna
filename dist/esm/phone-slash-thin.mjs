export const name="phone-slash-thin";
export const id="dl_5f6108ff66d74477a2cc";
export const url=new URL("../icons/phone-slash-thin.svg?v=4a85a3b8eec65e91b155d177937cb63d34c8d9c5e2a695780a999304dc1c09f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
