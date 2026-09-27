export const name="flowchart-fill";
export const id="dl_a638f60f6aeda4c82e1d";
export const url=new URL("../icons/flowchart-fill.svg?v=b9aa93099ab3486ecb70dc4fbde53e2cb9e4c75740d8ebdb02d2e71779d52e0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
