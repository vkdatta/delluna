export const name="lucid_2-focus";
export const id="dl_37217cdd281c4b4a9e32";
export const url=new URL("../icons/lucid_2-focus.svg?v=878c14ec3eebdde34d68d6f2ff409e1b42474ba41ec7dc93df638bdd0dc81da6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
