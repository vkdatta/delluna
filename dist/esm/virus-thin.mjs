export const name="virus-thin";
export const id="dl_06e7c637e4d465179e99";
export const url=new URL("../icons/virus-thin.svg?v=1eaec9f9a51dcffd08d6950fbab1e1129431bdd4452e7ef23b1456e6049f28e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
