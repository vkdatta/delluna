export const name="feather-duotone";
export const id="dl_aa31c2e3f9604c888654";
export const url=new URL("../icons/feather-duotone.svg?v=7cbf88b9725c0ca4c8e43038f7894adec0169d03bc0eca5f9402c80bb8f2fcea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
