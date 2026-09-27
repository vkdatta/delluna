export const name="personal_places";
export const id="dl_70ce69cfbc1522a0e648";
export const url=new URL("../icons/personal_places.svg?v=3d825291a1060b36a2701e3eac69f2a0b88da9f5bed8c8170d632825d69fd1b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
