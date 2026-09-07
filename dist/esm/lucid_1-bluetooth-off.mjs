export const name="lucid_1-bluetooth-off";
export const id="dl_6b923f01672142c8bdc8";
export const url=new URL("../icons/lucid_1-bluetooth-off.svg?v=b83711f17c886b5166ab79baedaffa73070a8e4c7ec73430f098a41716ef155a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
