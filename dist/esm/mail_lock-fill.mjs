export const name="mail_lock-fill";
export const id="dl_a685aefa59ee3fac8184";
export const url=new URL("../icons/mail_lock-fill.svg?v=e3dacaa22665eca0604f3e9b95fd31ef170188011a5d2cdd9ec7158045f34b0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
