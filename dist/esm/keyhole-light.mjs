export const name="keyhole-light";
export const id="dl_c8c9d7df5a174d1f912d";
export const url=new URL("../icons/keyhole-light.svg?v=3d8dbc165baa5516b5abd213a5af67339815e80ffb4efe34a3b03cf61efeb5b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
