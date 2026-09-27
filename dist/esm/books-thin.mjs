export const name="books-thin";
export const id="dl_dd3dbeaa8cd94f5d8f17";
export const url=new URL("../icons/books-thin.svg?v=a7600e8a3188e57456ce69da626ebe364c2ab88e0766eeaab1ff7c5fa1ff38f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
