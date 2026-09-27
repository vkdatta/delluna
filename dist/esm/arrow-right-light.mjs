export const name="arrow-right-light";
export const id="dl_e34980debca043f6a3b1";
export const url=new URL("../icons/arrow-right-light.svg?v=2cd678c14deae88840e7fa8144d873a7c7f3aa020a935431854fcaf74c932ac7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
