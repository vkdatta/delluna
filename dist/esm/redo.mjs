export const name="redo";
export const id="dl_36c32977254b00511686";
export const url=new URL("../icons/redo.svg?v=b830cceaba8f88874d5e982626419deb2f67ae6e8e794695ca366372d6e27922",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
