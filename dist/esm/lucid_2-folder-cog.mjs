export const name="lucid_2-folder-cog";
export const id="dl_648a908b01724c33b97b";
export const url=new URL("../icons/lucid_2-folder-cog.svg?v=9668ac0c9b242da5ec69479c02ddb532031861f1ec098ca9b13c9db1609671df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
