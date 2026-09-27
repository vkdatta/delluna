export const name="caret-circle-down-thin";
export const id="dl_599b3186471f4192aba0";
export const url=new URL("../icons/caret-circle-down-thin.svg?v=affebf502482d7ccca9d2bd99951da0a36f904ff344ac78fbc18ec1ac14eb8ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
