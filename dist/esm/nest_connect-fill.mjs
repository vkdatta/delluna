export const name="nest_connect-fill";
export const id="dl_201fa33b7b5a94b4c794";
export const url=new URL("../icons/nest_connect-fill.svg?v=62ab6f632f8a7ff8993fad5a656d7f66158802090d791ce4cb7bb327365dc551",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
