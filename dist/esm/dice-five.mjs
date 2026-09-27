export const name="dice-five";
export const id="dl_e69b90a1b504472cb6b3";
export const url=new URL("../icons/dice-five.svg?v=cad73e186ecfcb9c5bdfa7a545c354ceb81cf76ad1056e3525d046550f6cca47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
