export const name="windmill-bold";
export const id="dl_095a0fbb548bd7a05ffb";
export const url=new URL("../icons/windmill-bold.svg?v=bea839037cc5c983d4d8551b36392060fca08830e2d20d9e87dcad10858259fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
