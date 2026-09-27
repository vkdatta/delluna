export const name="drag_click";
export const id="dl_0c15a29d93396f497966";
export const url=new URL("../icons/drag_click.svg?v=bf200140d126e53600d39f266c3b10e198146a065434a6077009dfa4be2c6890",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
