export const name="device-mobile-slash-duotone";
export const id="dl_00b95db5ce434c03bc6e";
export const url=new URL("../icons/device-mobile-slash-duotone.svg?v=373b532fd5e9afee0331fbc85a24fa9cda63c219c83592c7e455ca687a03e6ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
