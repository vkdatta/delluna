export const name="tennis-ball-bold";
export const id="dl_f368c453591c8b74c509";
export const url=new URL("../icons/tennis-ball-bold.svg?v=7b819bdfb58a3b498ec3c303e58eed830d35eb5c7f9c3d4921b40afd87e27545",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
