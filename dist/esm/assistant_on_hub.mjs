export const name="assistant_on_hub";
export const id="dl_fde52f9713ededc94242";
export const url=new URL("../icons/assistant_on_hub.svg?v=96395065d0db0949698b2efcf710ecd7ee55bda12785c0c91462e8ea71df9e8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
