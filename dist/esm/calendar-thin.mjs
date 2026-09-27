export const name="calendar-thin";
export const id="dl_0bdaeb4fd9b4434a96a2";
export const url=new URL("../icons/calendar-thin.svg?v=24be86833031f39e67c104d78681d72bc2d14a3d0c6dace7428f964ccc4d8ead",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
