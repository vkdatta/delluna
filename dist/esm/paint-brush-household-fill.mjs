export const name="paint-brush-household-fill";
export const id="dl_1979194543ce472398b2";
export const url=new URL("../icons/paint-brush-household-fill.svg?v=2c90872a43605365bbf3c4f302b9c2320db5b88e76e6007720393cf6e441c7a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
