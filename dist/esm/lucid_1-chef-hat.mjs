export const name="lucid_1-chef-hat";
export const id="dl_eb6595a6b8a64e74a9f5";
export const url=new URL("../icons/lucid_1-chef-hat.svg?v=4dd51ffa0d6ff11d67776563a66b9913087be8e56487657843ddbea447bc60ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
