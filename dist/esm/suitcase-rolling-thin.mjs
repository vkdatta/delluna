export const name="suitcase-rolling-thin";
export const id="dl_91e5577f84174261b463";
export const url=new URL("../icons/S/suitcase-rolling-thin.svg?v=fc8591c6f6e3efe4c08ba868d321f49b262d51ba50f1c19ca940267fe5de061e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
