export const name="asterisk-bold";
export const id="dl_72254315df1345a1a1ae";
export const url=new URL("../icons/asterisk-bold.svg?v=c48abcb0e026cd9025eb7ff73321e4ddfccd88f9378006d50a2e4a3c1cbe71b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
