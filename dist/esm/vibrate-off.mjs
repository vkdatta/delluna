export const name="vibrate-off";
export const id="dl_c0d57ba9a81348959cde";
export const url=new URL("../icons/vibrate-off.svg?v=2e1ae314d7aeee2b7489a5fe918fecfe26f6be59764fb3fadc42b4c188f5fb31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
