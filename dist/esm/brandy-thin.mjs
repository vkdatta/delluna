export const name="brandy-thin";
export const id="dl_59b5ea51df144d9bb591";
export const url=new URL("../icons/brandy-thin.svg?v=df69daa4c8aad216d873e6ef341403028964e7bfab89bdd7f01967ecffe6178a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
