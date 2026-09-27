export const name="lucid_1-circle-x";
export const id="dl_b0b670126ab54e2296d9";
export const url=new URL("../icons/lucid_1-circle-x.svg?v=89bec7781069c89597fb095930d91754166898bc73203144a073f04698484395",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
