export const name="phone-plus-thin";
export const id="dl_56ecf500de9c4bf7b83d";
export const url=new URL("../icons/phone-plus-thin.svg?v=c0368d6bd307e4928ed568abe4e508bdbcdaafe6f6c4e2b4d536570208711c80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
