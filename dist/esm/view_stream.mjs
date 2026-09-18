export const name="view_stream";
export const id="dl_c90d4695e3af475eb27d";
export const url=new URL("../icons/V/view_stream.svg?v=7750886e8b002ec4e47fdd5a656c20c565482b721accc36b81e662db98674b33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
