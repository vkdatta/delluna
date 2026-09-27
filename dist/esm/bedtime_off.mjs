export const name="bedtime_off";
export const id="dl_715d47471d54f1d6b544";
export const url=new URL("../icons/bedtime_off.svg?v=1afadd943717b4fecf847779c0c6850aaa4ad2ed02793c24a84eaf2e6a671f27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
