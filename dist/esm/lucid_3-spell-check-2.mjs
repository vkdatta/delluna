export const name="lucid_3-spell-check-2";
export const id="dl_444d13ec990146298468";
export const url=new URL("../icons/lucid_3-spell-check-2.svg?v=4625dd979185881bdb8278f7d8b8446e94bfd3939f3db258f8de62cf90daa445",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
