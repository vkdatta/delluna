export const name="student-thin";
export const id="dl_7d25922f2ba154939a34";
export const url=new URL("../icons/student-thin.svg?v=7ec9a42fe32fc5c5698db7f97ad4c4ea2c231928147e54c8ebaacd7967004988",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
