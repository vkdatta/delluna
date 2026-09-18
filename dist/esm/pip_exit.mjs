export const name="pip_exit";
export const id="dl_5f3845149d6f4da3b46f";
export const url=new URL("../icons/pip_exit.svg?v=f9f587e810738e1a5bb5fa5e2e56c914e03a57a9ba166c249b8574b7ffed1511",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
