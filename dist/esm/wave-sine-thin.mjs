export const name="wave-sine-thin";
export const id="dl_48d5af10698d99189759";
export const url=new URL("../icons/wave-sine-thin.svg?v=e75fe54094b60f24f261e81f9c381c01d5aef50fe0ae0171875f9dfe7751e18a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
