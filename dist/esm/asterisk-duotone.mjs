export const name="asterisk-duotone";
export const id="dl_49457882e8de4821be23";
export const url=new URL("../icons/asterisk-duotone.svg?v=11d6e0e73e4a8158fb070aebf283a50ec22fb33605b51f1df0de45771c211ad4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
