export const name="sentiment_worried";
export const id="dl_002cb7c3c5658244ab6f";
export const url=new URL("../icons/sentiment_worried.svg?v=eb12367c1d7122431c73e2a8a2a16b8c0c262f67bf23ea1e650b793505535056",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
