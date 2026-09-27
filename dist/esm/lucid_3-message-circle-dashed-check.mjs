export const name="lucid_3-message-circle-dashed-check";
export const id="dl_c392182306ad4c84863b";
export const url=new URL("../icons/lucid_3-message-circle-dashed-check.svg?v=ec3d2b171a9730e285d17dbf3eefec35ef46b0469a808650d22543f5e59ea250",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
