export const name="library_music";
export const id="dl_7db4a273df7b598bb053";
export const url=new URL("../icons/library_music.svg?v=fbfef51bd07bf4c2b0b7be12e0d0e8a890dbd2668097299ce31cae60437c723d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
