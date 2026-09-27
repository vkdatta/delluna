export const name="arrow_forward";
export const id="dl_7bd279ff9ccc1cd6e863";
export const url=new URL("../icons/arrow_forward.svg?v=762dc4f6aa4631188dc1fd729d4f1dd26721976c5b186217e53074c71a5ca918",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
