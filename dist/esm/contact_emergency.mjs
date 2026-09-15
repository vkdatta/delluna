export const name="contact_emergency";
export const id="dl_f6327a5039c640809c4d";
export const url=new URL("../icons/C/contact_emergency.svg?v=c29f52fda796f93abef838e86f39d9b468e7807217096b1e2989dc69f93a0fd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
