export const name="history";
export const id="dl_4159063edacd41d1ae00";
export const url=new URL("../icons/vkdico/history.svg?v=998fa8a35170525fe586687840145c8bf5e4029e657af1fb0cd5ececc805e807",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
