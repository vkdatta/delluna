export const name="person-simple-snowboard-light";
export const id="dl_167275694684439fb854";
export const url=new URL("../icons/person-simple-snowboard-light.svg?v=c93ed3de31af5b8554c42141021fcc3a4d3b403bb1be49c6f5bdf567d8a1a4b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
