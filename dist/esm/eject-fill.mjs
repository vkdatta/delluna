export const name="eject-fill";
export const id="dl_779e47a208c24b9f9c3a";
export const url=new URL("../icons/eject-fill.svg?v=df8f832dbb4cfebce96be008193474c873d9a123ec8fdbd2cb659653a10e44d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
