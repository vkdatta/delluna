export const name="bookmarks-simple-thin";
export const id="dl_65af7b22179d45dbabb9";
export const url=new URL("../icons/bookmarks-simple-thin.svg?v=64a5adc6db9b57af5e10b00e9962394d1dfbdf3a722e65abc341069d3022bbd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
