export const name="washing-machine-duotone";
export const id="dl_594a3095cd2432a27e89";
export const url=new URL("../icons/washing-machine-duotone.svg?v=2ca9068dfc4099608f39bae9b51bea13c0f6e91c005fc45a275c6616320d480b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
