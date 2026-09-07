export const name="television-thin";
export const id="dl_4195f3cd2724459795d6";
export const url=new URL("../icons/T/television-thin.svg?v=b8c387abbdebb701025d2d6ee63e582c5fef3484b5cdd0900a4221b878f76fd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
