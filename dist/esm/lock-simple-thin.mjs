export const name="lock-simple-thin";
export const id="dl_125129685fc3453fa2f8";
export const url=new URL("../icons/lock-simple-thin.svg?v=34d88557ace1cfcb507aa020aa6119cc9f4a4feaaaec30d67fd82cf4f5b8026c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
