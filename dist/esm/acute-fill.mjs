export const name="acute-fill";
export const id="dl_85ad32dbc8785f6113e1";
export const url=new URL("../icons/acute-fill.svg?v=7d81894e8499121bda3d4c36423c42c7a7320500f9e424c5a32dcbb2bd60f684",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
