export const name="lucid_1-building";
export const id="dl_fea373519e484f0ca496";
export const url=new URL("../icons/lucid_1-building.svg?v=afdc91e432998d788f23331bd59fe0c182972e6fad575f0009e64a80d25a30ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
