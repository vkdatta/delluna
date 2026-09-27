export const name="database_search";
export const id="dl_242783d44f4127adb573";
export const url=new URL("../icons/database_search.svg?v=022acb87ed9a8adc341b69a891ddb0083b98e4bb063c4320cd813664e60c7066",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
