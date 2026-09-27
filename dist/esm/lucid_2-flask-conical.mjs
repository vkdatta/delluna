export const name="lucid_2-flask-conical";
export const id="dl_8b57c461f12a46888d7d";
export const url=new URL("../icons/lucid_2-flask-conical.svg?v=a0586fc77dfd4638ca08c2bf3cf9ddaf7bd40aede9a1c2df2b27e0b3d92ce9ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
