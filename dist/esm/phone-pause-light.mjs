export const name="phone-pause-light";
export const id="dl_2bc3842932a04ce887de";
export const url=new URL("../icons/phone-pause-light.svg?v=ed0bb11ba7538a3e9e3a52ac21424bdf53e6c3ad956baddec9bb704960d27085",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
