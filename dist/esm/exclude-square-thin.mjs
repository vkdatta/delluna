export const name="exclude-square-thin";
export const id="dl_9879eda727a84bcba484";
export const url=new URL("../icons/exclude-square-thin.svg?v=41c759bc819693a7657fe14d64e0533616ea4ee000fb6ab75aed767db624c33c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
