export const name="asterisk-bold";
export const id="dl_72254315df1345a1a1ae";
export const url=new URL("../icons/asterisk-bold.svg?v=5051f562f793ced7a559b41e8db35a818881a96767f6a068349b05dbd41d9399",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
