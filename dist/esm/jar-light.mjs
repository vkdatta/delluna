export const name="jar-light";
export const id="dl_27f01f88898244709736";
export const url=new URL("../icons/jar-light.svg?v=c732240ee34856389907ab1d71ad72b630414995b07dfcb3db7e78f3f3ee457c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
