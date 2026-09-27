export const name="piano-fill";
export const id="dl_ba70bf33e66da173004d";
export const url=new URL("../icons/piano-fill.svg?v=36692c70ba438a8cd133dfa43b8a2eb2e46da148744be17bd694a209adefc3ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
