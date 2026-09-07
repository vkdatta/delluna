export const name="asterisk-simple-thin";
export const id="dl_0207bab6f5fe4de7b8d6";
export const url=new URL("../icons/asterisk-simple-thin.svg?v=57a0cf9f1a47f2e36f2746ea36f9fd0135be0f61e07b58836bad186412e3409b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
