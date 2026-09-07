export const name="squares-four-thin";
export const id="dl_069723ce61084487b4cf";
export const url=new URL("../icons/S/squares-four-thin.svg?v=78be34b8059d7ca9eded63ec25fb53d24c2f42e704e9b14e7d178b47542fef81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
