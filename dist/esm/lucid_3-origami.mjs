export const name="lucid_3-origami";
export const id="dl_93dcaf8ec9cb48abbed3";
export const url=new URL("../icons/lucid_3-origami.svg?v=27c3f4a5f5b5f42236bec28c3ce0b14dda9cebb5a18c904c3fa4d499f901f1cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
