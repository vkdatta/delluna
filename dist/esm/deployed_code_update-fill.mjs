export const name="deployed_code_update-fill";
export const id="dl_e7d3d4cb0ae4bc8a54f4";
export const url=new URL("../icons/deployed_code_update-fill.svg?v=7e8febee5f81268f2e0d9da3c94c5edc951f2c0c2ae5798eb6001021535e59de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
