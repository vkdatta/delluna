export const name="office-chair-bold";
export const id="dl_78392b45531b40619796";
export const url=new URL("../icons/office-chair-bold.svg?v=526acb6a1165a76a53e6cc7457921b36fc6edcc2e34b0e567571b3f69d72e786",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
