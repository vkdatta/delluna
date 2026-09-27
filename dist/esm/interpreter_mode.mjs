export const name="interpreter_mode";
export const id="dl_435ca17dbf98b4365e5d";
export const url=new URL("../icons/interpreter_mode.svg?v=acdca79ea94f2bdd5577439569c6f6488b82ad03dc60c08132ed94fb3cc53024",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
