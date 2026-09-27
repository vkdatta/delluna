export const name="air_freshener";
export const id="dl_610073c3b05c7e2e0941";
export const url=new URL("../icons/air_freshener.svg?v=1e4d4185484f54f7dad99195c4fa2b687c8aa79acae9e64614168a571e06decd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
