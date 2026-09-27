export const name="auto_awesome_motion-fill";
export const id="dl_13f4746ef9cc1154234d";
export const url=new URL("../icons/auto_awesome_motion-fill.svg?v=9371b40dccd3da8d2e3058e0f34c450c287ca11be1dba8fe38b08c1583d6e02f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
