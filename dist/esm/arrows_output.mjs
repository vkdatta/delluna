export const name="arrows_output";
export const id="dl_2ee1f4f886138ff01dec";
export const url=new URL("../icons/arrows_output.svg?v=85d706656f19cb4741757ba1d617abbfc6f454cda0d7547557b924b92ec1a60d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
