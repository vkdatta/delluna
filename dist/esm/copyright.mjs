export const name="copyright";
export const id="dl_3a30c743c1a84939819b";
export const url=new URL("../icons/copyright.svg?v=6f20a1a5a6a16575fa58a470b70ef71b4426f75797209681a9c1f225590aee17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
