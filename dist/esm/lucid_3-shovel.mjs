export const name="lucid_3-shovel";
export const id="dl_32d08c26fab64389b350";
export const url=new URL("../icons/lucid_3-shovel.svg?v=db772d8030cab6302e390521ff285ee5336faa6dafbe52e80ef20c3607cfc288",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
