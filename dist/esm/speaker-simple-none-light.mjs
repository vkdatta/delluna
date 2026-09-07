export const name="speaker-simple-none-light";
export const id="dl_48fbdf1319fc433d8b0c";
export const url=new URL("../icons/S/speaker-simple-none-light.svg?v=26c29ad947faf2905163814f926bf9972d3e32a3605ed2e5e794ba30c87fede4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
