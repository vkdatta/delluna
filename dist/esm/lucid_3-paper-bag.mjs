export const name="lucid_3-paper-bag";
export const id="dl_9dca327fd5d64a69a373";
export const url=new URL("../icons/lucid_3-paper-bag.svg?v=c0ec4557ec7dd4c52a0458a3e3bff48ed4af3fbfdd91795d6743975efbcc66ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
