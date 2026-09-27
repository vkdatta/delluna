export const name="ranking";
export const id="dl_895ac177c571400c924d";
export const url=new URL("../icons/ranking.svg?v=c55aab5bb72b55123808ebdcc1223c31bf18e0341ebf3da2897a89eb6ab80961",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
