export const name="microsoft-word-logo-thin";
export const id="dl_0ce2c473ba6a4deab6a5";
export const url=new URL("../icons/microsoft-word-logo-thin.svg?v=b859aec6ddade768df8bf8320fa630069bf566561c92736fc7607b846669d732",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
