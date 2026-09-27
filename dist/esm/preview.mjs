export const name="preview";
export const id="dl_66a863805e100ded83ff";
export const url=new URL("../icons/preview.svg?v=afa2ec824e464a87e4a49d1ad10ed49561b77c0f032333bdd5adce27e17a4623",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
