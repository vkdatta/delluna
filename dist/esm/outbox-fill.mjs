export const name="outbox-fill";
export const id="dl_f7bdf36f6cd9edd9d7ca";
export const url=new URL("../icons/outbox-fill.svg?v=1c22d817bb980ef9c77dbca783dd94474a00d3e4216bae076f7684d4be0270b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
