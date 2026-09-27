export const name="wrong_location";
export const id="dl_8d2aedbbbd32efdb482d";
export const url=new URL("../icons/wrong_location.svg?v=df5b39dc4a03cdf185fe34cd661be88657f47409bfdc51e07a353a181b9810f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
