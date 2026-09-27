export const name="sentiment_content";
export const id="dl_47bb166fe5c4fe12b150";
export const url=new URL("../icons/sentiment_content.svg?v=1abb1040111325dbf8964b3e27a0bb465246e24657c2b014296eb005165d5258",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
