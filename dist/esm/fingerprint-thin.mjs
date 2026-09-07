export const name="fingerprint-thin";
export const id="dl_75fe54069b414b908bef";
export const url=new URL("../icons/fingerprint-thin.svg?v=4c194a2b28eef29ef094f6cda0768d42d7e05599ab562bc3388493532ab779e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
