export const name="calendar-slash-fill";
export const id="dl_c9d15b31972f44f288c0";
export const url=new URL("../icons/calendar-slash-fill.svg?v=ce2c73e21ce9977c8a3712e1a13ddaf02bf15b4ff4475d4aef81abd0b050b503",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
