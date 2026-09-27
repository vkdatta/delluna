export const name="auto_delete";
export const id="dl_4d4d4892eea613c7b2a9";
export const url=new URL("../icons/auto_delete.svg?v=8975c6872d5b5916cd02f35ac55c2e973e81231141da40bd3c4f72835e7bcc8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
