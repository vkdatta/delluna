export const name="rubric";
export const id="dl_12dda10a1411b546f1e1";
export const url=new URL("../icons/rubric.svg?v=a7718b7c5879e1007bce23ea5e072e3f46c1e50802971b7e8a4d8529e1d4997b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
