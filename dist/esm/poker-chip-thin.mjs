export const name="poker-chip-thin";
export const id="dl_ffd31bdd34d34b95b989";
export const url=new URL("../icons/poker-chip-thin.svg?v=026e590e82449cd1c76c5ac611949f5bcdffceb177e32f323d8fde29c0c42df8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
