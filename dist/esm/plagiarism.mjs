export const name="plagiarism";
export const id="dl_2c5b6aff12e47b7e04b9";
export const url=new URL("../icons/plagiarism.svg?v=9782a0556fd4f5132397fba985555a797af181f4cd28542198c9589dc72131c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
