export const name="subtract-light";
export const id="dl_c4b3532ea6204eddb794";
export const url=new URL("../icons/S/subtract-light.svg?v=ce904a1db811879d2ceacf6112117f7e3b0bdb7839a8db6d598430387f2463d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
