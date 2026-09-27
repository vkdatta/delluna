export const name="google-cardboard-logo-thin";
export const id="dl_9ea3883d94fb428a812f";
export const url=new URL("../icons/google-cardboard-logo-thin.svg?v=c02cc87884ea89bb4c7d9d76f164637b620b862287ed3f4d9861996aeaccf5f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
