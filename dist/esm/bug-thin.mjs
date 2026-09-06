export const name="bug-thin";
export const id="dl_6f790d46875e447ca1aa";
export const url=new URL("../icons/bug-thin.svg?v=1d6e012347d2e39bbf26b610b834b5abc5b5c6477734df49cc4dbff092e54715",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
