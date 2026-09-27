export const name="sigma-thin";
export const id="dl_5dea067193c32c97212a";
export const url=new URL("../icons/sigma-thin.svg?v=535c49ee1aefcf9635217a0f78673af5a7df1de9e07814ade517404ef3ad15bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
