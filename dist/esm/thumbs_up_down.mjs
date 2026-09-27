export const name="thumbs_up_down";
export const id="dl_8dee7be3b93c4a4ebca9";
export const url=new URL("../icons/thumbs_up_down.svg?v=40d889358ae014af0b2c956f9c6a411652e42acde7d27c3c0185fe76019288bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
