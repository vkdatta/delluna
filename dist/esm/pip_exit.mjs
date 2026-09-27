export const name="pip_exit";
export const id="dl_d60f336faf73dc478191";
export const url=new URL("../icons/pip_exit.svg?v=c0953a3e7ea4daa17e41baf42c424ec0fe43428bcaedcb96e61060366bcc9cf3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
