export const name="open-ai-logo-thin";
export const id="dl_977aa4459950468e9e6a";
export const url=new URL("../icons/open-ai-logo-thin.svg?v=ada0d86009e81c4d061754e76ad99c334cfad74095eeb3ea7c552af2e8189d1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
