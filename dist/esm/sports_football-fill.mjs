export const name="sports_football-fill";
export const id="dl_381f775633a0e98a53e7";
export const url=new URL("../icons/sports_football-fill.svg?v=52d07461d364d93b8c31ed7bdfaaf208927516426f245987e96730f4f1dca622",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
