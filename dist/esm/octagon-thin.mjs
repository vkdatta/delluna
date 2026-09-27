export const name="octagon-thin";
export const id="dl_d53f8c51a9c04028af7d";
export const url=new URL("../icons/octagon-thin.svg?v=dbbd1bafe945a6916f05238edff563952a659a5d92e91dafb0a32d2a9eb18cd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
