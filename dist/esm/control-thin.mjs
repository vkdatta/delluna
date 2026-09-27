export const name="control-thin";
export const id="dl_330ef4f59e124c07a63d";
export const url=new URL("../icons/control-thin.svg?v=15fc75df823ab7579cd296b084ae42b975a9975ef75cd044a91505d3b224ea1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
