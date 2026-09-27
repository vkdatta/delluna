export const name="open_jam";
export const id="dl_08ed475f212f46a994d7";
export const url=new URL("../icons/open_jam.svg?v=b1528fd39d6cfd71e9dc0263aa0dafa837951a28f04a867b3607ebe213df82a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
