export const name="wall-fill";
export const id="dl_67d537ae68974818a89c";
export const url=new URL("../icons/W/wall-fill.svg?v=cb8f17fe071b96098bb33ae94ee1fb8295c7530dc213bafcc3da98c7a1800f90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
