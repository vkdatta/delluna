export const name="chart-pie";
export const id="dl_83b75e2187244f20a5c2";
export const url=new URL("../icons/chart-pie.svg?v=dfa1855b8555721fcd3d75757325e6d2e2c883b7e258b40499d9fc91c06ce8ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
