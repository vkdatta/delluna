export const name="prohibit-bold";
export const id="dl_c91e2970976f4db780c2";
export const url=new URL("../icons/prohibit-bold.svg?v=314b84107ae1db37cdc75d1ad85ce363e4caff049d9087e8661fc2b06705ca3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
