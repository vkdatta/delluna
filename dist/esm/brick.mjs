export const name="brick";
export const id="dl_de1fb264d56706b2ec1d";
export const url=new URL("../icons/brick.svg?v=ada59651da1c3221238649f6b4a7667663b769af99f9b439e0f642b622b91c0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
