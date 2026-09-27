export const name="webcam-light";
export const id="dl_f4caf3a316bd2cef1b58";
export const url=new URL("../icons/webcam-light.svg?v=4541814145d0e6673a66bff1268de921c0dd72a1d89ce7b5c169e4dae6f9f5d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
