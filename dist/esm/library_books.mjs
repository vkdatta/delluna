export const name="library_books";
export const id="dl_7b027bde8cff10309ad0";
export const url=new URL("../icons/library_books.svg?v=00fa508231404c99011d8ee50d79e0deacbb66ae6a27ac47da7c248f4f301c5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
