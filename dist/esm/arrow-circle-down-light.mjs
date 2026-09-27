export const name="arrow-circle-down-light";
export const id="dl_4ab8702055c04fc69946";
export const url=new URL("../icons/arrow-circle-down-light.svg?v=ddc574894e6937b3444776a94f4ac03b722b5b978a79f884802936ae384b5aac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
