export const name="robot-thin";
export const id="dl_d72fc985551e4a72b25c";
export const url=new URL("../icons/robot-thin.svg?v=b73c051bd69bca6fb916467be4ffcd43d9146dc0eea8327f9232e4d765b3fbe1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
