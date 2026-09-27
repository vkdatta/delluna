export const name="lucid_2-credit-card-x";
export const id="dl_e406894cf4b248658313";
export const url=new URL("../icons/lucid_2-credit-card-x.svg?v=7c009e2c4c09d9c3f725fb8322795ab9bb372ce65e5d78483469eeea020910ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
