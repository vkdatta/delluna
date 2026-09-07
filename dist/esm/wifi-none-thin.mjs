export const name="wifi-none-thin";
export const id="dl_4b42c313e44b4a00892e";
export const url=new URL("../icons/W/wifi-none-thin.svg?v=4ae17d21caf95c7073b5d307a6abde6b6cf1bad6db3cb59a6de1cf8b973c2e84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
