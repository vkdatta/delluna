export const name="lucid_2-goal";
export const id="dl_75e35904337946f2b237";
export const url=new URL("../icons/lucid_2-goal.svg?v=adfa4dee6b5a9893eca436be7fde5ec0096617de38a4903e0427787af680fd51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
