export const name="square-scissors";
export const id="dl_a1baf5e0482b4d0c85d0";
export const url=new URL("../icons/square-scissors.svg?v=3b0babc83fc1224eca6cfd96439dc0ae6c78961c7bd6b6642809fdd095b602fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
