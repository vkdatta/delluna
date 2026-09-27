export const name="microscope-thin";
export const id="dl_4d81285c84b44d3e95a4";
export const url=new URL("../icons/microscope-thin.svg?v=6b1a3fa2cc19b1a99487fcaf428beb0aabe5157bc914f684cbf0ab156c1669f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
