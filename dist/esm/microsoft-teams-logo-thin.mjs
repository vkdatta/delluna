export const name="microsoft-teams-logo-thin";
export const id="dl_065be7538ba943a7b035";
export const url=new URL("../icons/microsoft-teams-logo-thin.svg?v=0c9f65682d4c50822d2be98321448aae3220a874caa8a7cb0a532a6f37387381",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
