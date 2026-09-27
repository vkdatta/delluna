export const name="tv";
export const id="dl_7e9ed127d5fb43a69082";
export const url=new URL("../icons/tv.svg?v=af7951309a655647b18af13deaf04621d3247af0ee6a08aea76133610fbfe51a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
