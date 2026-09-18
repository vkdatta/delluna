export const name="sdk-fill";
export const id="dl_37db4fd001844488bcf7";
export const url=new URL("../icons/S/sdk-fill.svg?v=16bd568ee0c3d03675dd35a2b5a1006e16d92ed73d9512eaae14420ccdba5fd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
