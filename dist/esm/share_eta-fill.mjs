export const name="share_eta-fill";
export const id="dl_d0f0205b851c17e04cb7";
export const url=new URL("../icons/share_eta-fill.svg?v=c374628c3ebbcd63e4d2b725e96bb468a8d202e31795dd505c2f392e50734cfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
