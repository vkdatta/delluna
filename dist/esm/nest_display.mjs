export const name="nest_display";
export const id="dl_990003fd6c36a46c1fd3";
export const url=new URL("../icons/nest_display.svg?v=f8cee2713f80e334351115851d90034705a5a8f5ffa2cfb4113d40819102aceb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
