export const name="select_to_speak";
export const id="dl_3be5726b9ebea6d65859";
export const url=new URL("../icons/select_to_speak.svg?v=7995a6e1a8c2471af4b119f1929827e69a8bb76ea40735b003be776bb69940ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
