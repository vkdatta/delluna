export const name="lucid_1-cooking-pot";
export const id="dl_61aeb7651d2345b795c7";
export const url=new URL("../icons/lucid_1-cooking-pot.svg?v=65a2b3f45a2ec6c3eaca0bbb0ebc54e9e962eb29078a782955729a8ebe348dbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
