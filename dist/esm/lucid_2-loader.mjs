export const name="lucid_2-loader";
export const id="dl_f027c227f5444b3e9374";
export const url=new URL("../icons/lucid_2-loader.svg?v=1d326b77053ead453f1095f0270da49bd941541b6a6788ad51eb10a4e60553cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
