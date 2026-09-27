export const name="chalkboard-simple-fill";
export const id="dl_0c0b95571a2e482db2fd";
export const url=new URL("../icons/chalkboard-simple-fill.svg?v=8a4b3cb1c4f50ab95d6cf5ec1e2d9dc972d7b2f0970fb4a65c57c22202c17ab4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
