export const name="voicemail-thin";
export const id="dl_3b47712d18460729f896";
export const url=new URL("../icons/voicemail-thin.svg?v=c88e5402632fbaf6f1536b90e32634c1cbaead4700ccb40d037cdbb4807ea734",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
