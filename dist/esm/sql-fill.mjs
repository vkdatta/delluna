export const name="sql-fill";
export const id="dl_4679db97221d9414d86e";
export const url=new URL("../icons/sql-fill.svg?v=bd0c3d8e06ce33441823b139d4e071dfc6ee57d152e2e432f4b7434b634d0823",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
