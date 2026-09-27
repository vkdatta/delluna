export const name="quotes-bold";
export const id="dl_7d6890f21c2d475b84ff";
export const url=new URL("../icons/quotes-bold.svg?v=4346e959117423bbc3ad4eb5ffd8721ce4e673d6fc51803bad57240ed8adac49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
