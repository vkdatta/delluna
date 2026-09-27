export const name="zodiac-taurus";
export const id="dl_3be4147e2a084c7a9211";
export const url=new URL("../icons/zodiac-taurus.svg?v=e0acb7abbcdf9d177fe63e8868894ef1f80df76b0501ead63756521e4ccf9fbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
