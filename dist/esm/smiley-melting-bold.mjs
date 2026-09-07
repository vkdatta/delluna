export const name="smiley-melting-bold";
export const id="dl_ddf47a342f5a4ae5b34d";
export const url=new URL("../icons/S/smiley-melting-bold.svg?v=496cffabf88130e6adeac79c46eff487a8a9fa1d3929a5df4be966219327eb10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
