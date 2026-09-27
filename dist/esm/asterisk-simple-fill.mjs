export const name="asterisk-simple-fill";
export const id="dl_1aefe3d2570343218245";
export const url=new URL("../icons/asterisk-simple-fill.svg?v=adc993ba2726e1455666c7df3a1aacb63cbeddd0f68dc773d2e97d06491ba043",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
