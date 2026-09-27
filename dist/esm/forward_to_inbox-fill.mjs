export const name="forward_to_inbox-fill";
export const id="dl_043e64cadef935014039";
export const url=new URL("../icons/forward_to_inbox-fill.svg?v=67659128a7f80ddc523810f7994c2d78e62f5f347b5fdb21beddbffa82f8a2b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
