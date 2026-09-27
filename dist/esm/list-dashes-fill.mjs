export const name="list-dashes-fill";
export const id="dl_2ee065b6d4e345c190de";
export const url=new URL("../icons/list-dashes-fill.svg?v=fdd72c98b44ff8c7e33d7d724748c79e067671bdc85b59d54e0dc7f697caf444",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
