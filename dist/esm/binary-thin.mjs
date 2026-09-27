export const name="binary-thin";
export const id="dl_b390cecf8c1b4e489012";
export const url=new URL("../icons/binary-thin.svg?v=22bb29ceca16252aa7a95517cb7ccf4351b03f12d7728d23ee62a85059364f0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
