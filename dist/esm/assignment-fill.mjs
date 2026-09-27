export const name="assignment-fill";
export const id="dl_95bbe22e360bbcc46f3b";
export const url=new URL("../icons/assignment-fill.svg?v=9556f5cb635c8f6b0ec01c74c2f91b8679a5021516a43aeb39994d81152ce071",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
