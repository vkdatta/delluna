export const name="rows-thin";
export const id="dl_25694c8671214ea6b848";
export const url=new URL("../icons/rows-thin.svg?v=4a69e07c8b82f2ea1da86f036ec35073d6c6fd89a09fdf11b0e3202fbfe1ea99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
