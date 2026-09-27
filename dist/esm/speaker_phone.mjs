export const name="speaker_phone";
export const id="dl_c5c85f4ef4439e775216";
export const url=new URL("../icons/speaker_phone.svg?v=12a8e93a393dc3e584d3622df44aa5aa7b708905c47c46f98c0c69ea0199e42e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
