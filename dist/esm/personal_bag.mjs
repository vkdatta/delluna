export const name="personal_bag";
export const id="dl_36d15622a79f3d52060a";
export const url=new URL("../icons/personal_bag.svg?v=94f65cb62054a025d710dc28cbda94a7227c9bfe4ecdb1b6a5ade29b9d35462e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
