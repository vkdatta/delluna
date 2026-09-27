export const name="lucid_1-banknote";
export const id="dl_fa9d47e8210f48cb9ec4";
export const url=new URL("../icons/lucid_1-banknote.svg?v=0895932fa036043a68519ed5aca5e938a26ef74cb827571957c595a01b551301",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
