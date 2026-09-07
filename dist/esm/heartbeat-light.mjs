export const name="heartbeat-light";
export const id="dl_a45d6bf403004922843c";
export const url=new URL("../icons/heartbeat-light.svg?v=bc2c5a3e704362aeee6118f22c5a971be0080dab3a1c65c2f3484c1c23718f3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
