export const name="lucid_3-scan-qr-code";
export const id="dl_9c8b604dae594dc68314";
export const url=new URL("../icons/lucid_3-scan-qr-code.svg?v=7e2c2a2821ab46c80d43a0fb687d409b4b961a65be23cab8d83e3e9aa58a33ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
