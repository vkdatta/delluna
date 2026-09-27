export const name="celebration";
export const id="dl_3ed79162db30e17ff818";
export const url=new URL("../icons/celebration.svg?v=748c1b0678c816150bbbb073be4f2429f706b1788d186737c0cd0584cc6041e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
