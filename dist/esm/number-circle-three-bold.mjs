export const name="number-circle-three-bold";
export const id="dl_b20e1352aa8c4be194b4";
export const url=new URL("../icons/number-circle-three-bold.svg?v=c295b7a494efa8d8422a6103a489989c74c9594af239378e71f21ee7ce9b4e53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
