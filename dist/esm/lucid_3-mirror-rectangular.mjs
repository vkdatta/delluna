export const name="lucid_3-mirror-rectangular";
export const id="dl_bd3f17c7e9de4df5a642";
export const url=new URL("../icons/lucid_3-mirror-rectangular.svg?v=23c36a5743a604941562d4081ef837722fad5250fa2a98c70f440fe5518e53d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
