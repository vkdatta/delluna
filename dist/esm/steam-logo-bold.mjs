export const name="steam-logo-bold";
export const id="dl_587679b796664a9a9394";
export const url=new URL("../icons/S/steam-logo-bold.svg?v=67bdf5bc3850d10477a0a602195afb7bf969442b145d73928146ad482446ad0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
