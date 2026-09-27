export const name="mop-fill";
export const id="dl_988a753a7bfba053e156";
export const url=new URL("../icons/mop-fill.svg?v=369c50469272085e1ea3e56055e86e8e126b067a6d0645c19893eb3a69fdea2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
