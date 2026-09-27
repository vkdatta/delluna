export const name="lucid_1-bluetooth";
export const id="dl_a0c59bf919354f9dba54";
export const url=new URL("../icons/lucid_1-bluetooth.svg?v=4a2280183f4a4bbaa9d100248fc307433d6a551b916cf8217e34f6ce94beb361",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
