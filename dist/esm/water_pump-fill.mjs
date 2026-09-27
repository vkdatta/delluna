export const name="water_pump-fill";
export const id="dl_f2f250da108ea8e45754";
export const url=new URL("../icons/water_pump-fill.svg?v=189e8c6c3bbbbe7acbb37d07cd3aa6626257b14c3900db678b08c2b834cd4a70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
