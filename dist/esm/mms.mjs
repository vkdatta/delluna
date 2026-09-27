export const name="mms";
export const id="dl_814701ce7e04e389d1e3";
export const url=new URL("../icons/mms.svg?v=cdd7e0a4d3f5f86c0664a3c66024ca1cf57fcec88a96b7c3b57d905d5f5108c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
