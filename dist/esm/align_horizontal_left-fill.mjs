export const name="align_horizontal_left-fill";
export const id="dl_a02fd429127b45c982ad";
export const url=new URL("../icons/A/align_horizontal_left-fill.svg?v=02db54e0cae29d871c3f5e292471bbb350c884553657bcd8cb818952b597018e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
