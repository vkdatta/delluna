export const name="trophy";
export const id="dl_e12fd020672a410288a9";
export const url=new URL("../icons/trophy.svg?v=c776e95efbec0d73b06941a57e40884d20dd4009748f8cd70057e9574dae110c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
