export const name="dew_point-fill";
export const id="dl_33edb7b7157e1d968aa1";
export const url=new URL("../icons/dew_point-fill.svg?v=302123e1118a9b379629ec59f89c556c076d7100ad08be491e274ad05dc0c9b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
