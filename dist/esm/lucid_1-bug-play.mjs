export const name="lucid_1-bug-play";
export const id="dl_e95dcbc0f6ff4fca9f44";
export const url=new URL("../icons/lucid_1-bug-play.svg?v=5e143f67d9de359a816e9230f860ffd7ec1034e5484eee6a664202972949df2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
