export const name="dialer_sip";
export const id="dl_15cf10db8dd616adabe7";
export const url=new URL("../icons/dialer_sip.svg?v=4acf407b28c96040b138ef249398ae4eca21e9fd86b7981c6f400ae03cca0d51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
