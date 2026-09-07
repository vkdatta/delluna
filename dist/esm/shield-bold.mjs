export const name="shield-bold";
export const id="dl_bf31327319174696a747";
export const url=new URL("../icons/S/shield-bold.svg?v=3810d8314875bc8cb9301d0631cc931707305cfcb46486178a12f5a211985ece",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
