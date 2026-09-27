export const name="partly_cloudy_day";
export const id="dl_35aff9c7887dd0d191a3";
export const url=new URL("../icons/partly_cloudy_day.svg?v=55664c54386e4c1d4d4f7ba5e1c854cfceb29f47a8ebe30b38584d82ab032b8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
