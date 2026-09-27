export const name="flag_circle";
export const id="dl_74632ebb2786f1733f4c";
export const url=new URL("../icons/flag_circle.svg?v=843fcadeb888798b1dd86744987ae57c94b803c43df76283a829b9b0b0706a94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
