export const name="padel-fill";
export const id="dl_e7e67cdea8e85912259c";
export const url=new URL("../icons/padel-fill.svg?v=15e4f98f27d6711ccacc14631fb0ccee5f2b311a85a310c1b92497fe4f0504da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
