export const name="handshake-thin";
export const id="dl_299844ef8b3547bdae3e";
export const url=new URL("../icons/handshake-thin.svg?v=197e4d1b973ff424e43c7a3f3e2f18c2848b467f4dd45721a493e3a43530233a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
