export const name="lucid_2-file-question-mark";
export const id="dl_e02e9b9c99034eb2ab9f";
export const url=new URL("../icons/lucid_2-file-question-mark.svg?v=c64692ade214bbf77e1b45068aa359fc8a1d75eddcf879f830cb3938b1c8df57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
