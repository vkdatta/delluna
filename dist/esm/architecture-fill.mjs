export const name="architecture-fill";
export const id="dl_e2962d785481d0d76eda";
export const url=new URL("../icons/architecture-fill.svg?v=df677077bfff7fcd165b70cf21751d755622736ee1a2c4acffcf62c26f4c4b48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
