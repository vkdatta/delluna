export const name="confetti-thin";
export const id="dl_254cde10b161439692ba";
export const url=new URL("../icons/confetti-thin.svg?v=3d06bfa4047abe8d3dad88b8247de23709a51fa57c9784fd04db1573711d0a9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
