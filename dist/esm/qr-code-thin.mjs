export const name="qr-code-thin";
export const id="dl_305f9330ae284a3d8054";
export const url=new URL("../icons/qr-code-thin.svg?v=2af392c404ee9568b21d48d7fa3c7fb4af2b8777d353d9b51cc1df4463c256d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
