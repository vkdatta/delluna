export const name="videocam_off";
export const id="dl_b2cc2a84cfc42a848587";
export const url=new URL("../icons/videocam_off.svg?v=20ad48b27705b6fc5bc18ac0ee0f2f07408de474d5cd1423693b0e271ac87030",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
