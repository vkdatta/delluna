export const name="lucid_1-can";
export const id="dl_58a6a3e6f44b4c75b9eb";
export const url=new URL("../icons/lucid_1-can.svg?v=16485a9a4013703ae970876d183451875c30b14c2b77d22aa6207fb0640efe74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
