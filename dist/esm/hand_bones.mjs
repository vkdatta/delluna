export const name="hand_bones";
export const id="dl_71cbdcc0b9fd46a6a52f";
export const url=new URL("../icons/hand_bones.svg?v=6fb608df055aeb44a326f320518f87dfebb1ef7dcdd50738c19180735c558c11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
