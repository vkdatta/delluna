export const name="person-simple-bike-thin";
export const id="dl_448bfb9aa27c4fe688cc";
export const url=new URL("../icons/person-simple-bike-thin.svg?v=cf463efbde18ce65a071230a12730bbbbf4f28e472e1fd754a2eb51ecca9411d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
