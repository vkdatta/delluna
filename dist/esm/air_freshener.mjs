export const name="air_freshener";
export const id="dl_ac17869f0d4e4c8e992c";
export const url=new URL("../icons/air_freshener.svg?v=1e4d4185484f54f7dad99195c4fa2b687c8aa79acae9e64614168a571e06decd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
