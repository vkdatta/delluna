export const name="editor_choice";
export const id="dl_43ef31718a26611e0d63";
export const url=new URL("../icons/editor_choice.svg?v=3d1fc151cda0189b330846e79d66067223e70bbf58cc447a9a111b8020ebdc6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
