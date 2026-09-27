export const name="lucid_2-images";
export const id="dl_3fc237b8dcc0486999e0";
export const url=new URL("../icons/lucid_2-images.svg?v=1a76cab5cf1cd44d687931bbe2241cc24695e0cd451a22ea5155e68bbfe79407",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
