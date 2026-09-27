export const name="do_not_disturb_off";
export const id="dl_3acfc366bd4d9d901b6b";
export const url=new URL("../icons/do_not_disturb_off.svg?v=06c67c8f199163fcaad12d63a55dc6009e4c773fef71f3bfe559251c4e842d1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
