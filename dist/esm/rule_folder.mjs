export const name="rule_folder";
export const id="dl_409a80b569c53e4aa92d";
export const url=new URL("../icons/rule_folder.svg?v=17a574c0a1686be8539bbfc8a89e3cc612e9ccea3ecdcaa253f6eb7f488cc94e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
