export const name="gamepad_up-fill";
export const id="dl_3b3812e7538529137608";
export const url=new URL("../icons/gamepad_up-fill.svg?v=b042d57f42f77af7cbdd302f606414a0affb8dd786460ba442f33c7e08e293fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
