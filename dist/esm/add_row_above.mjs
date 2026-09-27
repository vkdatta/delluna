export const name="add_row_above";
export const id="dl_a21071757839227bb40c";
export const url=new URL("../icons/add_row_above.svg?v=1940f058def55b5041d095888cf467cb8d6eadfb0149e1880c7a9253551e018f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
