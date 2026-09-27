export const name="align-bottom-simple-light";
export const id="dl_9e8db7a8959441bb9dda";
export const url=new URL("../icons/align-bottom-simple-light.svg?v=ce938b932293c86b7fe124144a2a19b34629202117c86034c8d10b31526dd96e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
