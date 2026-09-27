export const name="rubric";
export const id="dl_53e1eff383c3dc3a781d";
export const url=new URL("../icons/rubric.svg?v=e48f8f1cc94d6766481f8b6bb33f3764f528589cba616e35719e2bf6851ff203",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
