export const name="surround_sound";
export const id="dl_bdffe701f470df664345";
export const url=new URL("../icons/surround_sound.svg?v=bd122aa943055c29f04e4285f1403e6770be5095b19c7a3ee0fddb69f103e007",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
