export const name="change_history";
export const id="dl_8dd4fb3f1b814a5b9275";
export const url=new URL("../icons/change_history.svg?v=36afecb7e62bf9a98d40f09697a547ba5082773902a774c09d6a28e48bd6a3c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
