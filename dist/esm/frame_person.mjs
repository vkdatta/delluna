export const name="frame_person";
export const id="dl_77fe06462a22b4316e5d";
export const url=new URL("../icons/frame_person.svg?v=fcb672481bc268ff8ef0ec2deba799b3a075d2850dc115c5c3024c5949848875",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
