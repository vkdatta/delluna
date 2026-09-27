export const name="bell-simple-z-thin";
export const id="dl_9c6270b35b224e31b4e8";
export const url=new URL("../icons/bell-simple-z-thin.svg?v=2e112d0a5a2b28a3cffbf0abd3a821590d564d0459c769938dd2acdec42700f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
