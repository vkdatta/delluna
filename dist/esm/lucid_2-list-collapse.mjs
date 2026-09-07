export const name="lucid_2-list-collapse";
export const id="dl_29b5bd5ba8764370acd6";
export const url=new URL("../icons/lucid_2-list-collapse.svg?v=071c23c3307073aaf34f7abde064c0b54971c3ff08621c597679b9797ffb5722",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
