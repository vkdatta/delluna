export const name="trash-duotone";
export const id="dl_7ead99b716f6c02d79bf";
export const url=new URL("../icons/trash-duotone.svg?v=c600604036c2a3a505e9d54caf7eba05dea50376a13686278f11e71a9027985b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
