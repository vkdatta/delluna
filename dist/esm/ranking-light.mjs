export const name="ranking-light";
export const id="dl_2ce87638c3ef47329bc5";
export const url=new URL("../icons/ranking-light.svg?v=765d82a5b98713eef082116e3513071e234979942b8965de1ae7537a44747c15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
