export const name="ranking-bold";
export const id="dl_ecfab4eacbaa4ef6afbe";
export const url=new URL("../icons/ranking-bold.svg?v=51560e0767caf3251b80c71bfcbdb02cec2b7a475420c00a0e94ff86cd1b9ca0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
