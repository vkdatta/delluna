export const name="bookmark-bold";
export const id="dl_47519137c3354f3ca618";
export const url=new URL("../icons/bookmark-bold.svg?v=f649333706e784b984c88d2930c7f113cb7a660323e8fc4d02ebac42ff18fdbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
