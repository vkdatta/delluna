export const name="finn-the-human-thin";
export const id="dl_efcdad03fa9a4cd688c0";
export const url=new URL("../icons/finn-the-human-thin.svg?v=7564e7f902702044da95dbf439ee0de153335ba4bb37dc1f6c4aa2e9add28c1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
