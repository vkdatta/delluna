export const name="calendar_meal-fill";
export const id="dl_f40c2173540a88e988d9";
export const url=new URL("../icons/calendar_meal-fill.svg?v=6d570fc4e315f1d75261d43081e75b79df1fc8d9c41e4c9f2fc970f954428766",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
