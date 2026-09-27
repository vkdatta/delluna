export const name="dots-six-fill";
export const id="dl_7eb6452b79e94735b1a2";
export const url=new URL("../icons/dots-six-fill.svg?v=0e5615dc2b09a63d8a59663e1df71b5bb5f994704505be496d88951e35bead73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
