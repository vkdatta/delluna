export const name="shield_watch-fill";
export const id="dl_a517bb11c5e4293f369e";
export const url=new URL("../icons/shield_watch-fill.svg?v=310764e21cd40c4fecf6cb8d58c0a093fdbfaffdd7bc0b9c6096d4349afe43f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
