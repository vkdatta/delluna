export const name="award_meal";
export const id="dl_50026f104ab74e21bd31";
export const url=new URL("../icons/award_meal.svg?v=6b1d95c4d859bfc2e4c9681e2b8e3e93725d763933519d940a08116e2e0b74cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
