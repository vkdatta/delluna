export const name="lucid_1-cookie";
export const id="dl_5427c4f147154ff5a781";
export const url=new URL("../icons/lucid_1-cookie.svg?v=b76f14d6302ccc2be2c52113c1f8684cd3ff3554a7aa6dc6bbb71c23b71b3fab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
