export const name="clipboard-text-bold";
export const id="dl_7b0182659dff49089bce";
export const url=new URL("../icons/clipboard-text-bold.svg?v=c58bd386109edca555f9792275b9f47c708641915249ea2da29ddcb48ee51f22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
