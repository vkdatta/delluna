export const name="superset-proper-of-thin";
export const id="dl_1d6697bdd96e6e83da22";
export const url=new URL("../icons/superset-proper-of-thin.svg?v=4fe77da70f958e099a60e6bdf9ecb02774d61bee4be9226e85825f880f19e252",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
