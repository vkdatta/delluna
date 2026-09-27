export const name="replay_5";
export const id="dl_89965cf5d69762ba73ac";
export const url=new URL("../icons/replay_5.svg?v=1301551412be0260db4b1c2c0b51ec3cbca9c5c502b722d2dc5a68bc5696a2f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
