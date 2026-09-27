export const name="attractions";
export const id="dl_08f05523f597f36007ab";
export const url=new URL("../icons/attractions.svg?v=f8539242ece1585b9d005fcc916818ef63df74e1c22b8fe937829e4d75039382",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
