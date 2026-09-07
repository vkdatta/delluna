export const name="text-t-slash-duotone";
export const id="dl_faf22fb60de840119ac1";
export const url=new URL("../icons/T/text-t-slash-duotone.svg?v=03aa693f4557ffcbee0a192f60901f939a91ec1042a985ad17032857be380ab8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
