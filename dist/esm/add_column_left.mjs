export const name="add_column_left";
export const id="dl_da0610a64e90406db835";
export const url=new URL("../icons/A/add_column_left.svg?v=ada1a2f845cd09014c17dbc100b96a89fb48ccd727c8b589d9f1080d3811e631",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
