export const name="slack-logo-light";
export const id="dl_f2048a523ff9ad79339d";
export const url=new URL("../icons/slack-logo-light.svg?v=50013af039d86dcfaab4286a753310eb63c89446fa629b5ad16e6ad8e07de0f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
