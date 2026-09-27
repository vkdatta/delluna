export const name="sentiment_satisfied-fill";
export const id="dl_ae67c7cc7d0eb0336fc0";
export const url=new URL("../icons/sentiment_satisfied-fill.svg?v=07e964be637d87581689e9ccde00f12276f797a821239875d3860ccc5435944b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
