export const name="pill_off-fill";
export const id="dl_b5b6e1254d13de3710aa";
export const url=new URL("../icons/pill_off-fill.svg?v=106c6b6dc8a6ffd3b9e153d9873b86f9c3a834b436c4f4d64303484a6be445d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
