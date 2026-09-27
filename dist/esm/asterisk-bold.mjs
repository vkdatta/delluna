export const name="asterisk-bold";
export const id="dl_72254315df1345a1a1ae";
export const url=new URL("../icons/asterisk-bold.svg?v=90ff8b43a8ed1e441917b2b5a8e079e90c12d479e28282c59ee91e654b7b74b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
