export const name="lucid_2-divide";
export const id="dl_4aa54da05b38441799c0";
export const url=new URL("../icons/lucid_2-divide.svg?v=735cd530fba823c800426f984b6bb9aca5cf9ce3d473f2b2f492da89a80c7083",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
