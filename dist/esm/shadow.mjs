export const name="shadow";
export const id="dl_2d9ca36386ad13eb1e2a";
export const url=new URL("../icons/shadow.svg?v=8f0d1f3780166d63a4752a378a7090d5e4f6886ff4df97281f653683eaf5802e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
