export const name="auto_read_play";
export const id="dl_e0303a448e6f68b704b2";
export const url=new URL("../icons/auto_read_play.svg?v=b256c7b5429af3ebe2ac494b0bdf8550b548e27a25d7aac346daebb84be7d64b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
