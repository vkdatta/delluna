export const name="person_book";
export const id="dl_f2f0af2d16d202a5eb7a";
export const url=new URL("../icons/person_book.svg?v=b83e99e0a52fe995c290675dfa9d359e605fc4e15a4e111c8adc82e71d7c2773",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
