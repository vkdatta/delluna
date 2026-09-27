export const name="calendar_meal_2-fill";
export const id="dl_2c65bd514ba389aba6fb";
export const url=new URL("../icons/calendar_meal_2-fill.svg?v=c105da5f015acc8d4b1ce105818511de4e7fb2fed361f9de00c7ee75ebcabb70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
