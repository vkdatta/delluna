export const name="hand-withdraw-thin";
export const id="dl_70def84dea0f451eb4f7";
export const url=new URL("../icons/hand-withdraw-thin.svg?v=6de7a19a5117648f9dba8101eed47669b9277c229dff0d293682ed08edfe3726",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
