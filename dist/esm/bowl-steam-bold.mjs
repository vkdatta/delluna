export const name="bowl-steam-bold";
export const id="dl_1fd3849a83444835bde1";
export const url=new URL("../icons/bowl-steam-bold.svg?v=f5ac0dcf6a57192d8e31c87959194e0a2f6c97e322b076a9a8b99d6348ef4e36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
