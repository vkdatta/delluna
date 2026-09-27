export const name="thermometer-cold-thin";
export const id="dl_72baa7bae60f053de05f";
export const url=new URL("../icons/thermometer-cold-thin.svg?v=c3895705c9e89759c89a52746d6f69feedc916d92697607e97a99add24f64fea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
