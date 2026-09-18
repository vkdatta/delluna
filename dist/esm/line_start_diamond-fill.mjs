export const name="line_start_diamond-fill";
export const id="dl_aa2df5672a5047fcae48";
export const url=new URL("../icons/L/line_start_diamond-fill.svg?v=840f17482e718268a488f0859202eac171b5d5c1f0cd2b3ab0b3fe194c4d2ac9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
