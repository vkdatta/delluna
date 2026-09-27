export const name="volcano";
export const id="dl_25143438ec499ee3c46d";
export const url=new URL("../icons/volcano.svg?v=7a22076760effa464a860da14e3e12b782b108d9196c9957c55a2923b8f9ce1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
