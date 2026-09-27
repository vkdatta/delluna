export const name="whatsapp-logo-thin";
export const id="dl_7691e65539805af104e1";
export const url=new URL("../icons/whatsapp-logo-thin.svg?v=3cfb6077f73a0738b8e541a558f2b77caf8cc582acd3fbb5a8ffd90b59558990",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
