export const name="cards-thin";
export const id="dl_c8964df062e7431a9dda";
export const url=new URL("../icons/cards-thin.svg?v=f3528aea42680f97b5660af8e2a984978d04fc911b5baca0fd2a749373f87ed7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
