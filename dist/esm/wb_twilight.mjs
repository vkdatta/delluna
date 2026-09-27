export const name="wb_twilight";
export const id="dl_ff8a6ebed7b46c9108f1";
export const url=new URL("../icons/wb_twilight.svg?v=5a13cc2b4f8ad30180ede515e4379abc0c8cd75e75f106ef4ffce4e3e2b42378",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
