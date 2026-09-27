export const name="tags";
export const id="dl_a39f01d305f9434c9d19";
export const url=new URL("../icons/tags.svg?v=ebce695a994f8ef7277f128978bd52575291ba558f624633e573ffc62dcf183f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
