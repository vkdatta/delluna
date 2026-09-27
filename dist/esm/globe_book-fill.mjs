export const name="globe_book-fill";
export const id="dl_a96ec8c2b6f8e983aee7";
export const url=new URL("../icons/globe_book-fill.svg?v=f2a05435986131deed5321fdf3d4d0e21e18060c70de623390ec3be798bffc4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
