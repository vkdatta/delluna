export const name="lucid_3-mountain-snow";
export const id="dl_78dfd9f7651c42f5add0";
export const url=new URL("../icons/lucid_3-mountain-snow.svg?v=979476e183ffe63925807d87594fb51121a49917ed3702029483624281cdaab6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
