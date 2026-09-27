export const name="nest_secure_alarm";
export const id="dl_942b7ce730e0c4c106c2";
export const url=new URL("../icons/nest_secure_alarm.svg?v=5b130ee7d3e2ef9a53527556cf40adc8119bfc4002a813a51433a98eb93645d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
