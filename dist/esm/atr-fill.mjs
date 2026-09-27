export const name="atr-fill";
export const id="dl_29278e895065c9e2e134";
export const url=new URL("../icons/atr-fill.svg?v=d3144e3e6e73fb77d0dbe5892717ac52b5d5b6aa1be9b184048bec1e741afe16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
