export const name="spray-bottle-light";
export const id="dl_83e24b9f54634d55b2fd";
export const url=new URL("../icons/S/spray-bottle-light.svg?v=efc1e6dc2ccbd20e384b2b1b06e4692753fc9ef23a6e561b4bb01ac4a83703bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
