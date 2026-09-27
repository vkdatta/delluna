export const name="lucid_1-chess-king";
export const id="dl_838c5cfde9a647c88ad3";
export const url=new URL("../icons/lucid_1-chess-king.svg?v=3f4cdd8c4f82909989eeb459245bc6a3f410e28332246df66bf1afcf5027b200",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
