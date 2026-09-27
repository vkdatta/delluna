export const name="tools_pliers_wire_stripper";
export const id="dl_021306ff0b344c87d957";
export const url=new URL("../icons/tools_pliers_wire_stripper.svg?v=8acf09b9ae7ee02b4bd59f09d6f163b2fa52b6fc542e5e963c8eff87bdb9bde1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
