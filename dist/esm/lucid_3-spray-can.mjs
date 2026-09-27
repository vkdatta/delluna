export const name="lucid_3-spray-can";
export const id="dl_e1164d5753c34c539db7";
export const url=new URL("../icons/lucid_3-spray-can.svg?v=d92543e80887e23046078e32681d50d588686182c3b5f152f8b6cc23218729d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
