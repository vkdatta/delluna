export const name="game_button_l2";
export const id="dl_f61093d44eb1e9218ebf";
export const url=new URL("../icons/game_button_l2.svg?v=b3f99157803368e2d27930e94251ceef3dfe0b33d447080ed8177b499acfb2f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
