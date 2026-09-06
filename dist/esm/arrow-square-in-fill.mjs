export const name="arrow-square-in-fill";
export const id="dl_279380e356194fd6bc4c";
export const url=new URL("../icons/arrow-square-in-fill.svg?v=f93ca6a7c8e84d32f9bcc1bd75142062ec03f23da72ed4a1c3d8c6036691a27a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
