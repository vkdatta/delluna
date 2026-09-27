export const name="mountains";
export const id="dl_213086c249714186904d";
export const url=new URL("../icons/mountains.svg?v=f801275a80a38076263236d7a3ba545dfb71b63506eb3c44e4ba6837ea03a0fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
