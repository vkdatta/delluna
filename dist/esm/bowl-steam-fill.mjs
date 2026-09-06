export const name="bowl-steam-fill";
export const id="dl_a933438586fd45778d16";
export const url=new URL("../icons/bowl-steam-fill.svg?v=a8cac7464fdcae21357c7e8ab881052d3591efb6a8c32f492967cdc959752a00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
