export const name="tv";
export const id="dl_7e9ed127d5fb43a69082";
export const url=new URL("../icons/tv.svg?v=52b8e4b56da43f83fe32b6833580a4f522a0895960fe07ecf8a41f237aadd5fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
