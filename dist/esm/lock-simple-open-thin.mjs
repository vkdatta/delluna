export const name="lock-simple-open-thin";
export const id="dl_c82cf776950f4952ab99";
export const url=new URL("../icons/lock-simple-open-thin.svg?v=58b97382cb6dbd78ab6eb8d20e8a4d468dedc9612808bc9185d26cc0ebdb44b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
