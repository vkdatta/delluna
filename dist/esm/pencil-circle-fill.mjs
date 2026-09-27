export const name="pencil-circle-fill";
export const id="dl_43743dae8f284bfb9cf7";
export const url=new URL("../icons/pencil-circle-fill.svg?v=654f6944bc0a5b2c3d9cf74019300d730c8a03fac1ba89945b4c7431a9d840ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
