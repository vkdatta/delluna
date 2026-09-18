export const name="mode_off_on-fill";
export const id="dl_41ececf3baff4cfd8533";
export const url=new URL("../icons/mode_off_on-fill.svg?v=8fa384e9724259f970e740de5317aae1a7f8cdd5b137c83fd5ea51fb363d63e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
