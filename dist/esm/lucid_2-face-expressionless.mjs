export const name="lucid_2-face-expressionless";
export const id="dl_13772af748a944cba8b4";
export const url=new URL("../icons/lucid_2-face-expressionless.svg?v=f2dbc6c660156b059d34de77e52c72b05d33687acab967f52b69537dd614a57e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
