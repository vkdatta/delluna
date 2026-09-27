export const name="weekend";
export const id="dl_0de464cfe1e8564ab39f";
export const url=new URL("../icons/weekend.svg?v=fa7957ac387755560171d798ef7ee579d3130f01580926e1191e325195355015",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
