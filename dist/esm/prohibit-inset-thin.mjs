export const name="prohibit-inset-thin";
export const id="dl_62084d7bb97f4aa9bcea";
export const url=new URL("../icons/prohibit-inset-thin.svg?v=00dacb325cf96e3d454eb27fae26c3052651244dd0076f296a7863c66685b36a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
