export const name="ping-pong-fill";
export const id="dl_5a9bbf8866254b4b96d6";
export const url=new URL("../icons/ping-pong-fill.svg?v=4bbdb04966672ccc9cb4f58e991fc36d6c3eac0c5ca192ef1a9faf894cc3149f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
