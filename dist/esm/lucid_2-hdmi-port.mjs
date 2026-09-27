export const name="lucid_2-hdmi-port";
export const id="dl_838437763898425d8acb";
export const url=new URL("../icons/lucid_2-hdmi-port.svg?v=657b1aa9f32d20bbb01e0e627ce92a8d7880718d622c765441224c5dce73f999",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
