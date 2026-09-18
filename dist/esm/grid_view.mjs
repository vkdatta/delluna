export const name="grid_view";
export const id="dl_dfe555bb4bc040f888ae";
export const url=new URL("../icons/G/grid_view.svg?v=3c1f77dc444610b16aa83140a3a7f82ebc6b2128692e08a596dab25fcafee17f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
