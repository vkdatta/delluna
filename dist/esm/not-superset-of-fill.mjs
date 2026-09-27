export const name="not-superset-of-fill";
export const id="dl_a43e880f714f4b138b9c";
export const url=new URL("../icons/not-superset-of-fill.svg?v=81d6cffc0ba84981255368df50444211788b5f93e96d55bfdeaf12720ebc2b50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
