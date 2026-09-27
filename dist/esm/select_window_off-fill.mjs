export const name="select_window_off-fill";
export const id="dl_7e34807f115272c4163f";
export const url=new URL("../icons/select_window_off-fill.svg?v=f355aae8acfa4d0fb919e6a100e4cb7a711582c16b92558fb869060ea0413152",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
