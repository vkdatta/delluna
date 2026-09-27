export const name="lucid_3-pilcrow";
export const id="dl_0029b7486d3f4988b3cd";
export const url=new URL("../icons/lucid_3-pilcrow.svg?v=a4dee6c3b79652b4953517774b92342abb461c834c137335ea36fb1909e3f13e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
