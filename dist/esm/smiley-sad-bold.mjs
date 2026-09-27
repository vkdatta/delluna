export const name="smiley-sad-bold";
export const id="dl_db1567561688277e3d20";
export const url=new URL("../icons/smiley-sad-bold.svg?v=bfcb9065185fc130a956650d836bd83593d14b6d38db35382b6591ab89beacbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
