export const name="hockey-bold";
export const id="dl_e7ef5ec76a634dcf8b66";
export const url=new URL("../icons/hockey-bold.svg?v=cb294f1e1c42a9e2782c035722f20c762d5492d93331b58ed9a80e07c0f70461",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
