export const name="escalator";
export const id="dl_f3133845f968446c873b";
export const url=new URL("../icons/E/escalator.svg?v=89ccd661f493b1510514b69f22bd293f4fcf6765412c4eb7b5d18bef39483827",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
