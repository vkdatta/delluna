export const name="no_transfer-fill";
export const id="dl_592cea3f84cafd9001a6";
export const url=new URL("../icons/no_transfer-fill.svg?v=ef35ca1cad9a0526c0075cbd900a99b2472b0e0a128c4d59430f0fc19643d4a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
