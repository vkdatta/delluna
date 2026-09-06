export const name="lucid_2-folder-x";
export const id="dl_454974821fb04eb8bd07";
export const url=new URL("../icons/lucid_2-folder-x.svg?v=1c1c4c32192ec0b50e24e93cf259702b52b19630ed920dbfe464afc488042996",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
