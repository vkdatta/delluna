export const name="attractions-fill";
export const id="dl_7020087607d849625670";
export const url=new URL("../icons/attractions-fill.svg?v=39de73e3f88ff0a4600134fbac6dd0132aaccee18c844f420b46711fd0cb53bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
