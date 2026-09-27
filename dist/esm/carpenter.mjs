export const name="carpenter";
export const id="dl_95cbe620f6ccb92089a8";
export const url=new URL("../icons/carpenter.svg?v=13d5bd7438813c46f867a0e8791b2aa1a7083a5aafcd6b3274fc32cf5ce97e21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
