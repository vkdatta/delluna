export const name="asterisk-simple-thin";
export const id="dl_0207bab6f5fe4de7b8d6";
export const url=new URL("../icons/asterisk-simple-thin.svg?v=c33f2750dc2aa6da582336838e51434e46d72712d9f8e3173cf3c781cfff1a0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
