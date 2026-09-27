export const name="lucid_3-parasol";
export const id="dl_2b668dc347994e8eb1f5";
export const url=new URL("../icons/lucid_3-parasol.svg?v=316cd95d3229d0e25ac539508633aa6ad1a5db7e5f7559778c89771fd2c69e34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
