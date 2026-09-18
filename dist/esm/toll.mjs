export const name="toll";
export const id="dl_f417459d27594a1a8c1d";
export const url=new URL("../icons/T/toll.svg?v=51e11880e261dc3f96b8be6d43ed10aa53049d7721580584af023453b082dfa3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
