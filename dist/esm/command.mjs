export const name="command";
export const id="dl_59fbbd3ff6a145bd9d69";
export const url=new URL("../icons/command.svg?v=3cd170f7353f3bdd133c27b9f01a5b2a3dc8893b594b49b22629e851b6fcbc3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
