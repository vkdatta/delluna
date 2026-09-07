export const name="lucid_3-signal-high";
export const id="dl_b2777495b17246cb8e59";
export const url=new URL("../icons/lucid_3-signal-high.svg?v=ef217527048e9135ade96f117137c13f8da0e868b15ee29c6324203fe51d25e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
