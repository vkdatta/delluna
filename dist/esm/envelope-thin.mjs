export const name="envelope-thin";
export const id="dl_7824c9e0f2b24ceab1e4";
export const url=new URL("../icons/envelope-thin.svg?v=98307b6253fa95b5879ad151000210bdbc49e09588ae1560e6ed91d4b8b7cffd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
