export const name="star_rate-fill";
export const id="dl_562a66e8497cab9b4246";
export const url=new URL("../icons/star_rate-fill.svg?v=cbc8cd1e18005eef1344e536c9f8b1f06075a7e4918f751874447f51e1dc0b5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
