export const name="read-cv-logo";
export const id="dl_a4a9f503d366421b9af1";
export const url=new URL("../icons/read-cv-logo.svg?v=34b28814a2fa91a2524e0c248d49d76bc2d8df21de93fcce2f404f98e83470b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
