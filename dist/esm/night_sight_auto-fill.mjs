export const name="night_sight_auto-fill";
export const id="dl_7df3bdd10ea343349f4e";
export const url=new URL("../icons/night_sight_auto-fill.svg?v=3144c48e37868ac8560107df73624c2b109d4cc865582964c2520caa40293649",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
