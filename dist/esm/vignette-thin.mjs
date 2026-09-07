export const name="vignette-thin";
export const id="dl_7b74769334b144d7a6ff";
export const url=new URL("../icons/V/vignette-thin.svg?v=8913e09f83093a7d426fcdf3302a3a6fd3d70f827ee181340a3896c1db290872",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
