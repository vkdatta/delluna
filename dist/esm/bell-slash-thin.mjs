export const name="bell-slash-thin";
export const id="dl_f36c08cc246c4ada82a2";
export const url=new URL("../icons/bell-slash-thin.svg?v=92392aad6b66e13f04a1810ef91192060b781b88bd8ecbdfa284b122bba7a175",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
