export const name="gear-fill";
export const id="dl_718169e70b1b44ca8804";
export const url=new URL("../icons/gear-fill.svg?v=ed87a4b1684fbc1192c87c77ed31eba56a1836c14d5ac057ab584e505ed48c6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
