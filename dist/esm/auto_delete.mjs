export const name="auto_delete";
export const id="dl_340eba6791ee08ecaf80";
export const url=new URL("../icons/auto_delete.svg?v=d277e9984cfba8a386c3042e404087e0952374cdce634ee09ea165584f0881b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
