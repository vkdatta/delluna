export const name="lucid_1-cast";
export const id="dl_c4b2242229d4469580d4";
export const url=new URL("../icons/lucid_1-cast.svg?v=5fa033a20d21f7ddab7d74fab523fb07ac5050e6a12fca7b352367cd56d7fac6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
