export const name="book-thin";
export const id="dl_cf92052e21c84e56b405";
export const url=new URL("../icons/book-thin.svg?v=03c79c3ad9d243ea2ced317da177b50560b77e2700f112c23aa3ab2962dd581a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
