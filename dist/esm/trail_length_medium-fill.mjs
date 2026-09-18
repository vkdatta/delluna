export const name="trail_length_medium-fill";
export const id="dl_c1e12e588bab4a9eb50d";
export const url=new URL("../icons/T/trail_length_medium-fill.svg?v=f09d973e991c1ec3c5b46924db90762e08a69aace63f576bcd3dc5d6374b2e01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
