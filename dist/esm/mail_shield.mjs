export const name="mail_shield";
export const id="dl_fa5acd774dfe999c004b";
export const url=new URL("../icons/mail_shield.svg?v=8c7a148fb6ca75f03416ba01f8f9db34420b692d799d839a03cbb05257ba965d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
