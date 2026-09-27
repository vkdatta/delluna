export const name="desktop_landscape-fill";
export const id="dl_62d8730bb3761365f7e7";
export const url=new URL("../icons/desktop_landscape-fill.svg?v=5f91474cc12aab06f44933ac86506b30213fa23a1acafc0c642b199fca6ce680",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
