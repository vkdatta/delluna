export const name="playlist-thin";
export const id="dl_2d66cafa3b944ad58e2e";
export const url=new URL("../icons/playlist-thin.svg?v=529e437cfeae0608656f2a72454b796507e04a8cfaac90de04260ecfbdb2bca0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
