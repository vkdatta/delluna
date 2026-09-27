export const name="layout";
export const id="dl_562136fbbc1b4a229a80";
export const url=new URL("../icons/layout.svg?v=7f4986a68f4d4c498678081982b23616d1354e26d9786a51c38303c6c69daedb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
