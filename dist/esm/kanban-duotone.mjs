export const name="kanban-duotone";
export const id="dl_2cddec4b16c749718f97";
export const url=new URL("../icons/kanban-duotone.svg?v=bb28bc1f4590bed8f6747dcdd0e161e181e1f1d8fb1542331f9bb3f9b7e43f66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
