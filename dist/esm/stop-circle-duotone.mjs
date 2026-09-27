export const name="stop-circle-duotone";
export const id="dl_9a16a928be6581e81011";
export const url=new URL("../icons/stop-circle-duotone.svg?v=794b2b0d23ba0ec3bf7e3e80f9805a0656e42c436877594758e66c8331f0e29a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
