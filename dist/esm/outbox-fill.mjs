export const name="outbox-fill";
export const id="dl_44a1299724d611e6b20e";
export const url=new URL("../icons/outbox-fill.svg?v=1d2f8c403bb297c73e5eaa0a49e029af93ad14aa10ba9ff5c7290442263fa35a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
