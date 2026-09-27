export const name="plugs-bold";
export const id="dl_0481c12390e744e693a0";
export const url=new URL("../icons/plugs-bold.svg?v=2bd02c97beaf7bc8034fc836e8c3e713c73682d3b4c6d4caf1ee951935b0107e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
