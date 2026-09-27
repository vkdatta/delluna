export const name="general_device-fill";
export const id="dl_56022bf5fe7ba2705c41";
export const url=new URL("../icons/general_device-fill.svg?v=9a536eccb6b63c830a21543b93a4fd0a7a97923d7b8567462a587939f4079b37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
