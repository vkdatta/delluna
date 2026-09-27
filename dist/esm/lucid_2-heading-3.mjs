export const name="lucid_2-heading-3";
export const id="dl_654d7e8901664e18ac68";
export const url=new URL("../icons/lucid_2-heading-3.svg?v=3efda5be292378e1dd1d59f512e0e0c0411a231870d27bf8a1a83b32a054b1c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
