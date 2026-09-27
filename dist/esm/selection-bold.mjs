export const name="selection-bold";
export const id="dl_5b40d8eb0610eb6e9d4e";
export const url=new URL("../icons/selection-bold.svg?v=6dbc0359423ae0a2126ff2e3f0f5c4defdfd3cd0d61d48c3153801b855913563",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
