export const name="pen_size_2-fill";
export const id="dl_24dd89ae7ce19f800128";
export const url=new URL("../icons/pen_size_2-fill.svg?v=51c47aac895510e715c10771b4a8875e196cac46238616bd61d70fdfc6adf0e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
