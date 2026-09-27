export const name="swimming-pool-bold";
export const id="dl_7de436d02fb8be2248ac";
export const url=new URL("../icons/swimming-pool-bold.svg?v=910856d0d523c6ee7460b7a67b482ba48b346eff3e46766b8b0086e977967909",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
