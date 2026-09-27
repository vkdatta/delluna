export const name="mitre";
export const id="dl_95291e9d54374dd1d625";
export const url=new URL("../icons/mitre.svg?v=8d069fa8de0cdb424dbf3a791d20b61d3996d681ff787f340d46cfd7be32be76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
