export const name="tea-bag-thin";
export const id="dl_ce3a8cdb0e41e4d8d80a";
export const url=new URL("../icons/tea-bag-thin.svg?v=9a4fd01220bae4952c9b7b4a3f8d00cf629d1b0390bba4f9756945b516ead851",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
