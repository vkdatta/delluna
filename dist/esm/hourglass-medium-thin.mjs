export const name="hourglass-medium-thin";
export const id="dl_820d5ade8a674ee1b96a";
export const url=new URL("../icons/hourglass-medium-thin.svg?v=1d8139b5b3d06d964f58443cd7fa6713587c4ba29953b5ac43b8793b94034347",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
