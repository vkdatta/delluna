export const name="geometric-x";
export const id="dl_baf80d4c72453d60c3f6";
export const url=new URL("../icons/geometric-x.svg?v=14a462b51b58cfa626328c1c009208306cbd1b0984309984639c36b81852a422",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
