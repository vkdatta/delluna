export const name="shield-plus";
export const id="dl_0fab9603370b659b60c9";
export const url=new URL("../icons/shield-plus.svg?v=0b537a336a8b740a78388124eff87c4141e30cd26985bebe0c76c74845f25020",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
