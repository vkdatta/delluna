export const name="queue-thin";
export const id="dl_27111c6ac6ea41db8d3d";
export const url=new URL("../icons/queue-thin.svg?v=c08ffd34ddb06361971649af2a14feba1138c0bb94566c36d410a402beda3a27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
