export const name="notebook-light";
export const id="dl_def21d63742a4d7c87ac";
export const url=new URL("../icons/notebook-light.svg?v=10e68461751ecb0c3c26db538a99f546ad6649897fd0fd8e6ff6676c889028cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
