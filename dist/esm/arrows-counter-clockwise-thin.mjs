export const name="arrows-counter-clockwise-thin";
export const id="dl_a4a4ba23b783405eb115";
export const url=new URL("../icons/arrows-counter-clockwise-thin.svg?v=d2bf9e689f8ee531845c022f0da6f00fb02116f1b069453e4d6fb6df2a2e6f82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
