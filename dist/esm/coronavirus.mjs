export const name="coronavirus";
export const id="dl_ce62438fdf9af837a052";
export const url=new URL("../icons/coronavirus.svg?v=df34eb47984110438cddb1549dc0d721387a0dd314b517e28b498cc27ab6c647",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
