export const name="lucid_2-forward";
export const id="dl_a3dceee7ac0f4582892e";
export const url=new URL("../icons/lucid_2-forward.svg?v=d30254749070b51482438e6780f452dab540233afacf152635e050202935be61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
