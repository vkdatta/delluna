export const name="lego-smiley-thin";
export const id="dl_1c369acaa7cb4349824c";
export const url=new URL("../icons/lego-smiley-thin.svg?v=752961d535eb21b29e7c0c09910d2f80892c6b81fe44ef4d328959fbdb291281",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
