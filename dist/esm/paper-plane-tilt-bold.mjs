export const name="paper-plane-tilt-bold";
export const id="dl_961953b6a4104c4b8835";
export const url=new URL("../icons/paper-plane-tilt-bold.svg?v=e7e5b9e91760b351b75cb43e120eb5cbceafd2a902fd2ed250625cfa62927656",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
