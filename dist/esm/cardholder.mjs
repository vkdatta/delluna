export const name="cardholder";
export const id="dl_1a1ab9528a4d49d6837e";
export const url=new URL("../icons/cardholder.svg?v=1467d55ffa05ddd83e9aa21b42cc6016c5b42fbf747a996744bc38a5827c67c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
