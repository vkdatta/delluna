export const name="disco-ball-thin";
export const id="dl_bf259018425241659f7b";
export const url=new URL("../icons/disco-ball-thin.svg?v=a75cb730cda300b6834551683bdf96f104b34f780b44a9d7f4aa8a674698bb7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
