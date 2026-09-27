export const name="cursor";
export const id="dl_0f1a34cc37da446cb6cb";
export const url=new URL("../icons/cursor.svg?v=b05289940722328bf1d7fff4aa48f10af62b178e7b8eb9083219c3a725962615",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
