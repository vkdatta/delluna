export const name="lucid_3-message-square-off";
export const id="dl_f2c4ad56890948729606";
export const url=new URL("../icons/lucid_3-message-square-off.svg?v=b53f2562494ee0af05ab530b81177542f0aaf361df4b1dda2dae9a0dfcb3c261",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
