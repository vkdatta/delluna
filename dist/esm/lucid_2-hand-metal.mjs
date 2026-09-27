export const name="lucid_2-hand-metal";
export const id="dl_4047baf432ff470e8648";
export const url=new URL("../icons/lucid_2-hand-metal.svg?v=ba79f1b14c5ea91601d08cfd05bf21a45665caf41078ce49ec71233b62cea783",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
