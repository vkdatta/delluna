export const name="jeep";
export const id="dl_af64b51e0062469caaf5";
export const url=new URL("../icons/jeep.svg?v=2cfe82fe63666795b9292ff9a9ac9065607499c94463071124457638a32271e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
