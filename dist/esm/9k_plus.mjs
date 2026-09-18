export const name="9k_plus";
export const id="dl_b14135917d6b4088a667";
export const url=new URL("../icons/9k_plus.svg?v=6c8fb11571e6f889682ea7e679621c30e41243a995a680e79624a35472948a37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
