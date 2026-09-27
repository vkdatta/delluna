export const name="add_comment";
export const id="dl_e32b0fb1cd31a056f7a2";
export const url=new URL("../icons/add_comment.svg?v=3289a4a88bd1f2855334b89bab384eec7a36890f8ea7a8981fab820328d95733",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
