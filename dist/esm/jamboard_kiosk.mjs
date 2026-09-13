export const name="jamboard_kiosk";
export const id="dl_46525e25ee2e4fd3af1e";
export const url=new URL("../icons/J/jamboard_kiosk.svg?v=b9aed8ceead0a71f4b55720af0cf1cd915fb8eaace3442769f47f11bb926d6bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
